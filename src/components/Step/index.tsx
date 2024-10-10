import { Box, Skeleton, Typography } from '@mui/material';
import React from 'react';

interface StepProps {
  isLoading: boolean;
}

export const Step = ({ isLoading }: StepProps) => {
  return (
    <Box className='bg-highlight text-center p-4 rounded-2xl gap-4 sm:gap-8 flex items-center justify-center'>
      <Box className='flex flex-row items-end text-accent'>
        {isLoading ? (
          <Skeleton variant='circular' width={56} height={56} />
        ) : (
          <>
            <Typography variant='h3'>1</Typography>
            <Typography variant='h5' className='font-bold'>
              /8
            </Typography>
          </>
        )}
      </Box>
      {isLoading ? (
        <Skeleton variant='rounded' width='70%' height={27} />
      ) : (
        <Typography className='font-bold text-base sm:text-xl'>
          Let’s learn about different forms of energy.
        </Typography>
      )}
    </Box>
  );
};

export default Step;
