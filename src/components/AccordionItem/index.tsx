import clsx from 'clsx';
import React, { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionCardItemProps } from '@/types/accordion';

const AccordionItem = ({
  title,
  children,
  module,
  className,
  expandedClassName,
}: AccordionCardItemProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Accordion
      sx={{
        '&:before': {
          display: 'none',
        },
      }}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      className={clsx('!rounded-2xl', className, expanded && expandedClassName)}
      elevation={0}
      disableGutters
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box className='flex items-center gap-4'>
          {expanded ? (
            <PlayCircleFilledOutlinedIcon />
          ) : (
            <RadioButtonUncheckedOutlinedIcon />
          )}
          <Box className='flex flex-col'>
            <Typography variant='subtitle1' className='font-bold'>
              {title}
            </Typography>

            <Typography variant='subtitle2' className='font-bold text-grey0'>
              {module}
            </Typography>
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};
export default AccordionItem;
