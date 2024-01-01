import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  useTheme,
} from "@mui/material";
import { IDataList } from "../../pages/intent/interface";

type DataListProps = {
  data?: IDataList[];
  setOpenModal: (value: React.SetStateAction<boolean>) => void;
};

const DataList = ({ data, setOpenModal }: DataListProps) => {
  const theme = useTheme();

  const handleDelete = (id: string) => {
    console.log(`delete data list id : ${id}`);
  };

  return (
    <Container maxWidth="md">
      <Stack marginBottom={2}>
        <Button
          variant="contained"
          size="large"
          type="submit"
          sx={{ alignSelf: "end" }}
          onClick={() => setOpenModal(true)}
        >
          Add
        </Button>
      </Stack>

      <Box sx={{ backgroundColor: theme.palette.background.paper }}>
        <List>
          {data?.map((data) => (
            <ListItem
              key={data.id}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDelete(data.id)}
                >
                  <DeleteIcon color="error" />
                </IconButton>
              }
            >
              <ListItemText primary={data.title} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default DataList;
