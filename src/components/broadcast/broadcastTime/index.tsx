import React from "react";
import dayjs from "dayjs";

// components
import { Box, FormControlLabel, Radio, RadioGroup, Stack } from "@mui/material";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import BroadcastFormContainer from "../BroadcastFormContainer";

type BroadcastTimeProps = {
  broadcastTimeSelect: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  broadcastDate: dayjs.Dayjs | null;
  setBroadcastDate: (value: React.SetStateAction<dayjs.Dayjs | null>) => void;
};

const BroadcastTime = ({
  broadcastTimeSelect,
  handleChange,
  broadcastDate,
  setBroadcastDate,
}: BroadcastTimeProps) => {
  return (
    <BroadcastFormContainer formLabel="Broadcast time">
      <RadioGroup
        name="broadcastTime"
        value={broadcastTimeSelect}
        onChange={handleChange}
      >
        <FormControlLabel value="now" control={<Radio />} label="Send now" />
        <Box display="inline-flex">
          <FormControlLabel
            value="customBroadcastTime"
            control={<Radio />}
            label=""
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack direction="row" spacing={2}>
              <DatePicker
                disabled={broadcastTimeSelect !== "customBroadcastTime"}
                disablePast
                value={broadcastDate}
              />
              <TimePicker
                label="Controlled picker"
                ampm={false}
                value={broadcastDate}
                onChange={(newValue) => setBroadcastDate(newValue)}
                disabled={broadcastTimeSelect !== "customBroadcastTime"}
              />
            </Stack>
          </LocalizationProvider>
        </Box>
      </RadioGroup>
    </BroadcastFormContainer>
  );
};

export default BroadcastTime;
