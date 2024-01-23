import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import { Box, Stack, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box bgcolor={"#FE7A36"} height={120}>
      <Stack
        height={"100%"}
        direction={"row"}
        alignItems={"center"}
        spacing={2}
        px={4}
      >
        <AssignmentIndOutlinedIcon
          sx={{ width: 52, height: 52, color: "#fff" }}
        />
        <Typography variant="h4" color={"#fff"} fontWeight={600}>
          React Admin Dashboard
        </Typography>
      </Stack>
    </Box>
  );
};

export default Banner;
