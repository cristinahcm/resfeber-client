import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const interests = [
  "Aventurer",
  "Beach",
  "Culture",
  "Food",
  "Nature",
  "Nightlife",
  "Shopping",
];

function getStyles(interest, UserInterest, theme) {
  return {
    fontWeight:
    UserInterest.indexOf(interest) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectComponent() {
  const theme = useTheme();
  const [UserInterest, setUserInterest] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setUserInterest(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div className='searchpage'>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Interests</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="interests"
          multiple
          value={UserInterest}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Interests" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {interests.map((interest) => (
            <MenuItem
              key={interest}
              value={interest}
              style={getStyles(interest, UserInterest, theme)}
            >
              {interest}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
