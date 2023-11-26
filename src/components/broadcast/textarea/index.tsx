import React from "react";

// components
import { Box, IconButton, Stack, TextField } from "@mui/material";

// icons
import CloseIcon from "@mui/icons-material/Close";

type BroadcastTextareaProps = {
  textInputs: string[];
  handleInputChange: (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleRemoveTextarea: (index: number) => void;
};

const BroadcastTextarea = ({
  textInputs,
  handleInputChange,
  handleRemoveTextarea,
}: BroadcastTextareaProps) => {
  return (
    <Box sx={{ width: 500, maxWidth: "100%" }}>
      {textInputs.map((text, index) => (
        <div key={index}>
          <Stack
            bgcolor="#f5f5f5"
            width="100%"
            height={36}
            alignItems="flex-end"
            px={1}
          >
            <IconButton
              size="small"
              disabled={textInputs.length <= 1}
              onClick={() => handleRemoveTextarea(index)}
            >
              <CloseIcon
                fontSize="medium"
                sx={{
                  color: "#333",
                  opacity: textInputs.length <= 1 ? 0.5 : undefined, // Apply opacity conditionally
                }}
              />
            </IconButton>
          </Stack>
          <TextField
            key={index}
            fullWidth
            placeholder="Enter text..."
            multiline
            minRows={5}
            value={text}
            onChange={(e) => handleInputChange(index, e)}
            sx={{ marginBottom: 2 }}
          />
        </div>
      ))}
    </Box>
  );
};

export default BroadcastTextarea;
