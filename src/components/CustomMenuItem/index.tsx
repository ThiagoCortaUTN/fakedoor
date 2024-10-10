import { CustomMenuItemProps } from '@/types/menu';
import { MenuItem } from '@mui/material';
import React from 'react';

const CustomMenuItem = ({ onClick, children }: CustomMenuItemProps) => {
  return (
    <MenuItem
      className='w-full flex content-center gap-4 p-4 hover:bg-highlight'
      onClick={onClick}
    >
      {children}
    </MenuItem>
  );
};

export default CustomMenuItem;
