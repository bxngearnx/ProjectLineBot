import React, { useState } from "react";

// components
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  IconButton,
  Link,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import BroadcastFormContainer from "../BroadcastFormContainer";

// icons
import CloseIcon from "@mui/icons-material/Close";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 800,
  minHeight: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  color: "#fff",
};

type Settings = {
  label: string;
  name: keyof typeof initialSettings;
};

const settings: Settings[] = [
  {
    label: "Publish to LINE VOOM",
    name: "publish",
  },
  {
    label: "Set maximum broadcast volume",
    name: "maxBroadcastVal",
  },
  {
    label: "Create A/B test",
    name: "createABTest",
  },
  {
    label: "Assign to a campaign",
    name: "campaign",
  },
];

const initialSettings = {
  publish: false,
  maxBroadcastVal: false,
  createABTest: false,
  campaign: false,
};

const AdvancedSettings = () => {
  const [settingChecked, setSettingChecked] =
    useState<typeof initialSettings>(initialSettings);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange =
    (name: keyof typeof initialSettings) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSettingChecked({
        ...settingChecked,
        [name]: event.target.checked,
      });
    };

  return (
    <BroadcastFormContainer formLabel="Assign responsibility">
      <FormGroup>
        {settings.map((data) => (
          <div key={data.name}>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange(data.name)}
                  checked={settingChecked[data.name]}
                />
              }
              label={data.label}
            />
            {/* Set maximum broadcast volume */}
            {data.name === "maxBroadcastVal" &&
              settingChecked.maxBroadcastVal && (
                <Stack mb={2} spacing={1} mt={1}>
                  <TextField type="number" />
                  <Link href="#">
                    Check your current number of available messages
                  </Link>
                </Stack>
              )}

            {/* Create A/B test */}
            {data.name === "createABTest" && settingChecked.createABTest && (
              <Stack
                sx={{ bgcolor: "#fdeae8" }}
                padding={2}
                mb={2}
                spacing={1}
                mt={1}
              >
                <Typography color="#eb4e3d">
                  Your target reach must be at least 5,000 to use A/B testing.
                </Typography>
              </Stack>
            )}

            {/* Assign to a campaign */}
            {data.name === "campaign" && settingChecked.campaign && (
              <>
                <Stack
                  sx={{ backgroundColor: "#DFDFDE" }}
                  paddingX={1}
                  alignItems="flex-end"
                >
                  <IconButton size="small" onClick={handleOpen}>
                    <DriveFileRenameOutlineIcon
                      fontSize="medium"
                      sx={{ color: "#333" }}
                    />
                  </IconButton>
                  <CampaignModal open={open} handleClose={handleClose} />
                </Stack>
                <Stack sx={{ bgcolor: "#fff" }} height={80}>
                  <Typography color="#333" p={2}>
                    Not assigned
                  </Typography>
                </Stack>
              </>
            )}
          </div>
        ))}
      </FormGroup>
    </BroadcastFormContainer>
  );
};

const CampaignModal = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => (
  <Modal open={open} onClose={handleClose}>
    <Box sx={style}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" component="h2">
          Campaigns
        </Typography>
        <IconButton size="small" onClick={handleClose}>
          <CloseIcon fontSize="medium" sx={{ color: "#fff" }} />
        </IconButton>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Stack minHeight={200}>
        <Typography align="center">
          No campaigns yet. Create a campaign to help organize your broadcasts.
        </Typography>
        <Button
          color="success"
          variant="contained"
          sx={{ color: "#fff", fontWeight: 600, marginTop: 5 }}
        >
          Create a campaign
        </Button>
      </Stack>
      <Divider sx={{ my: 2 }} />
      {/* button */}
      <Stack direction="row" justifyContent="center" spacing={2}>
        <Button variant="contained" color="inherit" onClick={handleClose}>
          Close
        </Button>
      </Stack>
    </Box>
  </Modal>
);

export default AdvancedSettings;
