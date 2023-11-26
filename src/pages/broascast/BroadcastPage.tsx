import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

// components
import { Button, Container, Divider, Stack, Typography } from "@mui/material";

import AdvancedSettings from "../../components/broadcast/advancedSettings";
import BroadcastTime from "../../components/broadcast/broadcastTime";
import Recipients from "../../components/broadcast/recipients";

// icons
import AddIcon from "@mui/icons-material/Add";
import BroadcastTextarea from "../../components/broadcast/textarea";

const BroadcastPage = () => {
  const [recipientSelect, setRecipientsSelect] = useState("allFriends");
  const [broadcastTimeSelect, setBroadcastTimeSelect] = useState("now");
  const [broadcastDate, setBroadcastDate] = useState<Dayjs | null>(dayjs());
  const [textareaInputs, setTextareaInputs] = useState<string[]>([""]);

  const handleRecipientChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRecipientsSelect((event.target as HTMLInputElement).value);
  };

  const handleBroadcastTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBroadcastTimeSelect((event.target as HTMLInputElement).value);
  };

  const handleAddInput = () => {
    const updatedInputs = [...textareaInputs, ""];
    setTextareaInputs(updatedInputs);
  };

  const handleTextareaInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const updatedInputs = [...textareaInputs];

    if (event.target) {
      updatedInputs[index] = event.target.value;
      setTextareaInputs(updatedInputs);
    }
  };

  const handleRemoveTextarea = (index: number) => {
    const updatedInputs = [...textareaInputs];
    updatedInputs.splice(index, 1);
    setTextareaInputs(updatedInputs);
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Broadcast
      </Typography>

      <Divider sx={{ margin: "16px 0px 16px 0px" }} />

      {/* button */}
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" spacing={2}>
          <Button variant="contained" disabled>
            Save draft
          </Button>
          <Button variant="contained" disabled>
            Send test
          </Button>
        </Stack>

        <Stack width={200}>
          <Button
            variant="contained"
            color="success"
            fullWidth
            sx={{ color: "#ffffff" }}
          >
            Send
          </Button>
        </Stack>
      </Stack>

      <Divider sx={{ margin: "16px 0px 16px 0px" }} />

      <Container>
        <Recipients
          recipientSelect={recipientSelect}
          handleChange={handleRecipientChange}
        />
        <BroadcastTime
          broadcastDate={broadcastDate}
          setBroadcastDate={setBroadcastDate}
          broadcastTimeSelect={broadcastTimeSelect}
          handleChange={handleBroadcastTimeChange}
        />
        <AdvancedSettings />

        <Divider sx={{ margin: "16px 0px 24px 0px" }} />

        <BroadcastTextarea
          textInputs={textareaInputs}
          handleInputChange={handleTextareaInputChange}
          handleRemoveTextarea={handleRemoveTextarea}
        />

        <Button
          color="success"
          variant="outlined"
          sx={{ color: "#ffffff", marginTop: 4 }}
          startIcon={<AddIcon />}
          onClick={handleAddInput}
        >
          Add
        </Button>

        <Stack width="100%" alignItems="flex-end" my={8}>
          <Button
            variant="contained"
            color="success"
            sx={{ color: "#ffffff", width: 200 }}
          >
            Send
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default BroadcastPage;
