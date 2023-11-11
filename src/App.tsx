import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Intent from "./pages/intent/Intent";
import Chatbot from "./pages/Chatbot/Chatbot";
import Training from "./pages/Training/Training";
import Photo from "./pages/Photo/Photo";


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
      ],
    },

  ]);

  return <RouterProvider router={router} />;
}

export default App;
