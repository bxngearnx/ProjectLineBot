import { zodResolver } from "@hookform/resolvers/zod";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { SelectElement, TextFieldElement, useForm } from "react-hook-form-mui";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { RegisterForm, TRegisterForm } from "../../lib/validations/register";

type SelectType = Record<string, string>;

const namePrefixOptions: SelectType[] = [
  {
    id: "นาย",
    label: "นาย",
  },
  {
    id: "นาง",
    label: "นาง",
  },
  {
    id: "นางสาว",
    label: "นางสาว",
  },
  {
    id: "อื่นๆ",
    label: "อื่นๆ",
  },
];

const genderOptions: SelectType[] = [
  {
    id: "ชาย",
    label: "ชาย",
  },
  {
    id: "หญิง",
    label: "หญิง",
  },
  {
    id: "ไม่ระบุ",
    label: "ไม่ระบุ",
  },
];

const Theme = createTheme({
  palette: {
    primary: {
      main: "#313131",
    },
    secondary: {
      main: "#C70039",
    },
    info: {
      main: "#164DC9",
    },
  },
});

export default function SignUp() {
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<RegisterForm>({
    resolver: zodResolver(TRegisterForm),
  });
  const onSubmit = async (data: RegisterForm) => {
    const delay = 1300;

    console.log(data);
    await toast.promise(
      new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, delay);
      }),
      {
        loading: "Registering...",
        success: <b>Register successfully</b>,
        error: <b>Could not register.</b>,
      }
    );

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
        toast.dismiss();
        navigate("/");
      }, delay);
    });
  };

  return (
    <ThemeProvider theme={Theme}>
      <Container component="main" maxWidth="md" sx={{ my: 4 }}>
        <Typography component="h1" variant="h4" align="center" marginY={4}>
          ลงทะเบียนผู้ใช้งาน
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={4}>
            <TextFieldElement
              control={control}
              name={"email"}
              label={"Email"}
              required
              type={"email"}
            />
            <SelectElement
              name={"namePrefix"}
              label={"คำนำหน้าชื่อ"}
              control={control}
              options={namePrefixOptions}
              required
            />
            <TextFieldElement
              control={control}
              name={"firstName"}
              label="ชื่อ (First Name)"
              required
            />
            <TextFieldElement
              control={control}
              name={"lastName"}
              label="นามสกุล (Last Name)"
              required
            />
            <SelectElement
              name={"gender"}
              label={"เพศ"}
              control={control}
              options={genderOptions}
              required
            />
            <TextFieldElement
              control={control}
              name={"phoneNumber"}
              label="หมายเลขโทรศัพท์"
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextFieldElement
              control={control}
              name={"address"}
              label="ที่อยู่ที่ติดต่อได้ (Address)"
              multiline
              minRows={3}
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextFieldElement
              control={control}
              required
              name="dateOfBirth"
              label="วันเดือนปีเกิด (Date of Birth)"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
            {/* Thai national id card */}
            <TextFieldElement
              control={control}
              name="idCard"
              required
              label="เลขบัตรประชาชน 13 หลัก"
              validation={{ minLength: 13, maxLength: 13 }}
            />
            <TextFieldElement
              control={control}
              required
              label="เลขหลังบัตรประชาชน"
              name="lasorCode"
            />
            {/* button submit */}
            <Button type={"submit"} variant={"contained"} color={"primary"}>
              Submit
            </Button>
          </Stack>
        </form>
      </Container>
    </ThemeProvider>
  );
}
