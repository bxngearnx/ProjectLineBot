import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Chatbot from "./pages/Chatbot/Chatbot";
import Photo from "./pages/Photo/Photo";
import SignUp from "./pages/SignUp/SignUp";
import Training from "./pages/Training/Training";
import BroadcastPage from "./pages/broascast/BroadcastPage";
import Home from "./pages/home/Home";
import Intent from "./pages/intent/Intent";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import IntentDetail from "./pages/intent/detail/IntentDetail";
import User from "./pages/user/User";

const queryClient = new QueryClient();

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/SignUp",
      element: <SignUp />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/intent",
          element: <Intent />,
        },
        { path: "/intent/:id/detail", element: <IntentDetail /> },
        {
          path: "/chatbot",
          element: <Chatbot />,
        },
        {
          path: "/training",
          element: <Training />,
        },
        {
          path: "/photo",
          element: <Photo />,
        },
        {
          path: "/broadcast",
          element: <BroadcastPage />,
        },
        {
          path: "/user",
          element: <User />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
