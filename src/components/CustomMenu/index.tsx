import React from 'react';
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  Typography,
  Button,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import MenuIcon from '@mui/icons-material/Menu';
import { MENU_LIST } from '@/constants/menu';
import CustomMenuItem from '../CustomMenuItem';

const CustomMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box className='flex content-center '>
        <Button
          onClick={handleClick}
          className='hidden sm:flex hover:bg-highlight rounded-lg p-2'
        >
          <Box className='flex flex-row gap-4 cursor-pointer text-start items-center normal-case'>
            <Avatar>F</Avatar>
            <Box className='flex flex-col'>
              <Typography className='text-black0 font-semibold text-base'>
                Fakedoor
              </Typography>
              <Typography className='text-black0 text-sm'>
                fakedoor@gmail.com
              </Typography>
            </Box>
            <ArrowDropDownIcon className='text-black0' />
          </Box>
        </Button>
        <IconButton
          onClick={handleClick}
          size='small'
          className='block sm:hidden'
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PopoverClasses={{ paper: 'rounded-2xl w-[250px]' }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {MENU_LIST.map((item, index) => (
          <CustomMenuItem key={index} onClick={handleClose}>
            <item.icon /> {item.title}
          </CustomMenuItem>
        ))}
      </Menu>
    </>
  );
};

export default CustomMenu;
