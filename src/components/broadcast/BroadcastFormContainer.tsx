import React from "react";
import { FormControl, FormLabel, Stack } from "@mui/material";

type BroadcastFormContainerProps = {
  children: React.ReactNode;
  formLabel: string;
};

const BroadcastFormContainer = ({
  children,
  formLabel,
}: BroadcastFormContainerProps) => {
  return (
    <Stack direction="row" spacing={4} marginY={4}>
      <FormControl
        fullWidth
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "32px",
        }}
      >
        <FormLabel sx={{ width: 180, marginTop: "10px", textAlign: "end" }}>
          {formLabel}
        </FormLabel>
        {children}
      </FormControl>
    </Stack>
  );
};

export default BroadcastFormContainer;
