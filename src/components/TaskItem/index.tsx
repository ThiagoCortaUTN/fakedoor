import { Box, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { CompletedIcon } from '../CompletedIcon';
import { TaskItemProps } from '@/types/modules';

export const TaskItem = ({ task }: TaskItemProps) => {
  const { module, title } = useMemo(() => {
    const splitTitle = task.title.split('-');

    return { module: splitTitle[0], title: splitTitle[1] };
  }, [task.title]);

  return (
    <Box className='flex items-center gap-4 py-4 px-2 rounded-2xl'>
      <CompletedIcon isCompleted={task.isLocked} />

      <Box className='flex flex-col'>
        <Typography variant='subtitle1' className='font-bold text-primary'>
          {title}
        </Typography>

        <Typography variant='subtitle2' className='font-bold text-grey0'>
          {module}
        </Typography>
      </Box>
    </Box>
  );
};
