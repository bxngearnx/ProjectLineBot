import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Container, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { SelectElement, TextFieldElement, useForm } from "react-hook-form-mui";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { RegisterForm, TRegisterForm } from "../../lib/validations/register";
import "../../styles/global.scss";

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
      main: "#FE7A36",
    },
    secondary: {
      main: "#F5AA8480",
    },
    info: {
      main: "#164DC9",
    },
  },
});

export default function SignUpForm() {
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
      <Box bgcolor={"#F5AA8480"} py={8}>
        <Container
          maxWidth="md"
          sx={{
            borderRadius: 10,
            background: "rgba(217, 217, 217, 0.23)",
            boxShadow:
              "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
          style={{ padding: 0 }}
        >
          <Typography
            component="h1"
            variant="h4"
            align="center"
            py={2}
            bgcolor={"#FE7A36"}
            color={"#fff"}
            sx={{
              filter:
                "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            }}
          >
            ระบบลงทะเบียนผู้ใช้งาน
          </Typography>

          <Box p={6} px={12}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <Stack spacing={4}>
                <TextFieldElement
                  sx={{ bgcolor: "#fff" }}
                  control={control}
                  name={"email"}
                  placeholder={"อีเมลล์"}
                  required
                  type={"email"}
                />
                <SelectElement
                  sx={{ bgcolor: "#fff" }}
                  name={"namePrefix"}
                  label={"คำนำหน้าชื่อ"}
                  control={control}
                  options={namePrefixOptions}
                  required
                />
                <TextFieldElement
                  sx={{ bgcolor: "#fff" }}
                  control={control}
                  name={"firstName"}
                  placeholder="ชื่อ"
                  required
                />
                <TextFieldElement
                  sx={{ bgcolor: "#fff" }}
                  control={control}
                  name={"lastName"}
                  placeholder="นามสกุล"
                  required
                />
                <SelectElement
                  sx={{ bgcolor: "#fff" }}
                  name={"gender"}
                  label={"เพศ"}
                  control={control}
                  options={genderOptions}
                  required
                />
                <TextFieldElement
                  sx={{ bgcolor: "#fff" }}
                  control={control}
                  name={"phoneNumber"}
                  placeholder="หมายเลขโทรศัพท์"
                  required
                />
                <TextFieldElement
                  sx={{ bgcolor: "#fff" }}
                  control={control}
                  name={"address"}
                  placeholder="ที่อยู่ที่ติดต่อได้"
                  multiline
                  minRows={3}
                  required
                />
                <TextFieldElement
                  sx={{ bgcolor: "#fff" }}
                  control={control}
                  required
                  name="dateOfBirth"
                  placeholder="วันเกิด (วัน/เดือน/ปี)"
                  type="date"
                />
                {/* Thai national id card */}
                <TextFieldElement
                  sx={{ bgcolor: "#fff" }}
                  control={control}
                  name="idCard"
                  required
                  placeholder="เลขประจำตัวประชาชน"
                  validation={{ minLength: 13, maxLength: 13 }}
                />
                <TextFieldElement
                  sx={{ bgcolor: "#fff" }}
                  control={control}
                  required
                  placeholder="เลขหลังบัตรประชาชน"
                  name="lasorCode"
                />
                {/* button submit */}
                <Button
                  type={"submit"}
                  variant={"contained"}
                  color={"primary"}
                  sx={{ color: "#fff", fontSize: "1.2rem" }}
                >
                  บันทึก
                </Button>
              </Stack>
            </form>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
