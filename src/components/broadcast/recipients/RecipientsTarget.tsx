// components
import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  Modal,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

// icons
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  color: "#fff",
};

const RecipientsTarget = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <FormControl margin="normal">
      <TextField
        label="Recipients label (optional)"
        id=""
        defaultValue=""
        size="small"
        helperText="Filter names help you stay organized. Find them under 'Target' in your
        broadcast list."
      />
      {/* Audiences */}
      <Typography marginTop={2} marginBottom={1}>
        Audiences
      </Typography>
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
        <AudiencesModal open={open} handleClose={handleClose} />
      </Stack>
      <Stack sx={{ bgcolor: "#fff" }} height={80}>
        <Typography color="#333" p={2}>
          None selected
        </Typography>
      </Stack>

      <Box marginY={2}>
        <Typography marginTop={2} marginBottom={1}>
          Filter by demographic
        </Typography>
        <Stack sx={{ bgcolor: "#fdeae8" }} padding={2}>
          <Typography color="#eb4e3d">
            To use this filter, your target reach must be at least 100.
          </Typography>
        </Stack>
      </Box>
    </FormControl>
  );
};

const AudiencesModal = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  return (
    <Modal open={open} sx={{}}>
      <Box sx={style}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6" component="h2">
            Audiences
          </Typography>
          <IconButton size="small" onClick={handleClose}>
            <CloseIcon fontSize="medium" sx={{ color: "#fff" }} />
          </IconButton>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box display="flex" gap={2}>
          <TextField
            placeholder="Audience name..."
            id=""
            defaultValue=""
            size="small"
            fullWidth
          />
          <Button variant="contained" color="success">
            <SearchIcon />
          </Button>
          <Button variant="contained" color="inherit">
            Clear
          </Button>
        </Box>
        <AudiencesTable />

        <Divider sx={{ my: 2 }} />
        {/* button */}
        <Stack direction="row" justifyContent="center" spacing={2}>
          <Button variant="contained" color="inherit" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="success" variant="contained">
            Add
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

const AudiencesTable = () => {
  return (
    <TableContainer component={Paper} sx={{ my: 2 }}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Audience name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Volume</TableCell>
          </TableRow>
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  );
};

export default RecipientsTarget;
