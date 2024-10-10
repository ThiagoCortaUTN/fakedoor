'use client';

import React from 'react';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useRouter } from 'next/navigation';
import { Button, Typography } from '@mui/material';

export interface BackButtonProps {
  onClick?: () => void;
}
const BackButton = ({ onClick }: BackButtonProps) => {
  const router = useRouter();

  return (
    <Button
      variant='text'
      onClick={onClick ? onClick : router.back}
      size='medium'
      className='text-black0 rounded-full gap-2'
    >
      <ArrowBackOutlinedIcon className='text-lg' />
      <Typography variant='button' className='font-bold normal-case'>
        Back
      </Typography>
    </Button>
  );
};

export default BackButton;
