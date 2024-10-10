import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import clsx from 'clsx';

import { CompletedIcon } from '../CompletedIcon';
import { AccordionCardProps } from '@/types/accordion';

const AccordionCard = ({
  title,
  children,
  completed,
  number,
  className,
  count,
  image,
}: AccordionCardProps) => {
  return (
    <Accordion
      sx={{
        '&:before': {
          display: 'none',
        },
      }}
      className={clsx('!rounded-2xl ', className)}
      elevation={0}
      disableGutters
    >
      <AccordionSummary expandIcon={<CompletedIcon isCompleted={completed} />}>
        {image && (
          <Image
            src={`/images/${image}`}
            width={50}
            height={50}
            alt={title}
            className='mr-4'
          />
        )}
        <Box className='flex flex-col'>
          <Box className='flex'>
            {number && (
              <Typography
                variant='subtitle1'
                className='font-bold text-grey0 whitespace-nowrap	'
              >
                {`${number} ·`}
              </Typography>
            )}
            <Typography variant='subtitle1' className='font-bold pl-1'>
              {title}
            </Typography>
          </Box>

          <Typography variant='subtitle2' className='font-bold text-grey0'>
            {`${count} exercises`}
          </Typography>
        </Box>
      </AccordionSummary>

      <AccordionDetails className='flex flex-col gap-2'>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};
export default AccordionCard;
