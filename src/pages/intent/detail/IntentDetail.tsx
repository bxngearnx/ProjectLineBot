import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { TextFieldElement } from "react-hook-form-mui";
import { useNavigate, useParams } from "react-router-dom";
import DataList from "../../../components/intent/DataList";
import DataListModal from "../../../components/intent/DataListModal";
import { useIntentDetail } from "../hooks";

const IntentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openTraining, setOpenTraining] = useState(false);
  const [openPerponse, setOpenPerponse] = useState(false);
  const { intent, form, onSubmit } = useIntentDetail(id);

  return (
    <Container>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        {/* button */}
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          marginBottom={5}
        >
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate("/intent")}
          >
            Back
          </Button>
          <Button variant="contained" size="large" type="submit">
            Save
          </Button>
        </Stack>

        {/* intent name */}
        <Stack direction={"column"} spacing={4}>
          <Stack spacing={4} direction={"row"} alignItems={"center"}>
            <label>
              <Typography variant="h6">Intent Name :</Typography>
            </label>
            <TextFieldElement
              control={form.control}
              name={"intentName"}
              placeholder="Type your intent name..."
              type={"text"}
            />
          </Stack>

          {/* training Phrases */}
          <Box>
            <Stack direction={"row"} alignItems={"center"} spacing={4}>
              <label>
                <Typography variant="h6">training Phrases :</Typography>
              </label>
            </Stack>

            <DataList
              data={intent?.trainingPhrases}
              setOpenModal={setOpenTraining}
            />
          </Box>

          {/* perponse */}
          <Box>
            <Stack direction={"row"} alignItems={"center"} spacing={4}>
              <label>
                <Typography variant="h6">Perponse :</Typography>
              </label>
            </Stack>

            <DataList data={intent?.perponse} setOpenModal={setOpenPerponse} />
          </Box>
        </Stack>
      </form>

      {/* data list modal */}
      <DataListModal
        form={form}
        fieldName="trainingPhrases"
        onSubmit={onSubmit}
        header="Training Phrase"
        open={openTraining}
        setOpen={setOpenTraining}
      />
      <DataListModal
        form={form}
        fieldName="perponse"
        onSubmit={onSubmit}
        header="Perponse"
        open={openPerponse}
        setOpen={setOpenPerponse}
      />
    </Container>
  );
};

export default IntentDetail;
