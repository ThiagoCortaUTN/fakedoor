import { Unity } from 'react-unity-webgl';
import React, { useEffect, useState } from 'react';
import { Box, Button, Skeleton } from '@mui/material';

import { UnityCanvasProps } from '@/types/unity';

export const UnityCanvas = ({
  openFullscreen,
  unityProvider,
  isLoaded,
}: UnityCanvasProps) => {
  const [devicePixelRatio, setDevicePixelRatio] = useState(
    typeof window !== 'undefined' ? window.devicePixelRatio : undefined
  );

  useEffect(() => {
    // A function which will update the device pixel ratio of the Unity
    // Application to match the device pixel ratio of the browser.
    const updateDevicePixelRatio = () => {
      setDevicePixelRatio(window.devicePixelRatio);
    };
    // Adding an event listener to the window which will update the
    // device pixel ratio of the Unity Application when the device pixel
    // ratio changes.
    window.addEventListener('resize', updateDevicePixelRatio);
    // Initial call to set the correct device pixel ratio.
    updateDevicePixelRatio();
    return () => {
      // Removing the event listener when the component unmounts.
      window.removeEventListener('resize', updateDevicePixelRatio);
    };
  }, []);

  return (
    <Box className='w-full h-[500px] mt-8'>
      {!isLoaded && (
        <Box className='h-full w-full flex justify-center items-center'>
          <Skeleton className='w-full h-full rounded-2xl' variant='rounded' />
        </Box>
      )}

      <Unity
        style={{ display: isLoaded ? 'block' : 'none' }}
        className='w-full h-full rounded-2xl'
        unityProvider={unityProvider}
        devicePixelRatio={devicePixelRatio}
      />

      {isLoaded && (
        <Box className='w-full flex justify-center m-4'>
          <Button
            variant='contained'
            color='primary'
            size='large'
            className='bg-gradient-to-r from-start to-end text-white py-2 px-8 rounded-full font-bold normal-case'
            onClick={openFullscreen}
          >
            Open Fullscreen
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default UnityCanvas;
