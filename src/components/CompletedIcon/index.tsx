import React from 'react';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import { CompletedIconProps } from '@/types/icons';

export const CompletedIcon = ({ isCompleted }: CompletedIconProps) => {
  return isCompleted ? (
    <RadioButtonCheckedOutlinedIcon />
  ) : (
    <RadioButtonUncheckedOutlinedIcon />
  );
};
