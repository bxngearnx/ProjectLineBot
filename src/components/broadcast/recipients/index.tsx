import React from "react";

// components
import {
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
} from "@mui/material";
import BroadcastFormContainer from "../BroadcastFormContainer";
import RecipientsTarget from "./RecipientsTarget";

type RecipientProps = {
  recipientSelect: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Recipient = ({ recipientSelect, handleChange }: RecipientProps) => {
  return (
    <BroadcastFormContainer formLabel="Recipients">
      <RadioGroup
        name="recipients"
        value={recipientSelect}
        onChange={handleChange}
      >
        <FormControlLabel
          value="allFriends"
          control={<Radio />}
          label="All friends"
        />
        <FormControlLabel
          value="targeting"
          control={<Radio />}
          label="Targeting"
        />
        <FormHelperText>
          You can narrow down your friends into smaller groups based on
          demographics or past actions. This can make your broadcasts more
          effective.
        </FormHelperText>
        {recipientSelect === "targeting" && <RecipientsTarget />}
      </RadioGroup>
    </BroadcastFormContainer>
  );
};

export default Recipient;
