import { Box, Typography, Avatar, TextField } from '@mui/material';
import { SystemStyleObject, Theme } from '@mui/system';

import { Card } from '@components/atoms';
import { IContact } from 'react-coding-interview-shared/models';
import { KeyboardEventHandler, useState } from 'react';

export interface IContactCardProps {
  person: IContact;
  sx?: SystemStyleObject<Theme>;
}

export const ContactCard: React.FC<IContactCardProps> = ({
  person: { name, email },
  sx,
}) => {
  const [showNameInput, setShowNameInput] = useState(false);
  const [nameInputValue, setNameInputValue] = useState(name);

  const renderAnInput = () => {
    setShowNameInput(true);
  };

  //todo change my type later
  const changeNameInput = (e: any) => {
    setNameInputValue(e.target.value);
  };

  const cancelInput = (e:  any) => {
    if(e.key === 'Escape'){
    setShowNameInput(false);
    setNameInputValue(name);
    }
  };


  return (
    <Card sx={sx}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar />
        <Box textAlign="center" mt={2}>
            {showNameInput ? (<TextField value={nameInputValue} onChange={changeNameInput} onBlur={() => setShowNameInput(false)} onKeyDown={e => cancelInput(e)}/>) : (
            <Typography variant="subtitle1" lineHeight="1rem" onClick={() => renderAnInput()}>
              {nameInputValue}
            </Typography>
            )}
          <Typography variant="caption" color="text.secondary">
            {email}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};
