import React from "react";
import { UseFormReturn } from "react-hook-form-mui";
import { IIntent } from "../../pages/intent/interface";
import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type DataListModalProps = {
  header: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  form: UseFormReturn<IIntent, any, undefined>;
  fieldName: "trainingPhrases" | "perponse";
  onSubmit: (data: IIntent) => Promise<void>;
};

const DataListModal = ({
  header,
  open,
  setOpen,
  form,
  fieldName,
  onSubmit,
}: DataListModalProps) => {
  const handleClose = () => setOpen(false);
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h5" color="white">
          Add {header}
        </Typography>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Box marginY={4}>
            <TextField
              fullWidth
              {...form.register(fieldName)}
              name={fieldName}
              placeholder={`Type your ${header}...`}
              type={"text"}
            />
          </Box>

          {/* button */}
          <Stack
            width="100%"
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Button variant="outlined" size="large" onClick={handleClose}>
              Back
            </Button>
            <Button variant="contained" size="large" type="submit">
              Save
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};

export default DataListModal;
