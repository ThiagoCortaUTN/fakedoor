'use client';

import { useState } from 'react';
import Container from '@mui/material/Container';
import { Box, Grid2 } from '@mui/material';
import { useUnityContext } from 'react-unity-webgl';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import SideBar from '@/components/Sidebar';
import BackButton from '@/components/BackButton';
import Step from '@/components/Step';

const UnityCanvas = dynamic(() => import('@/components/UnityCanvas'), {
  ssr: false,
});

const AssigmentPage = () => {
  const router = useRouter();
  const [lesson] = useState('/lesson01');

  const { unityProvider, isLoaded, requestFullscreen, unload } =
    useUnityContext({
      loaderUrl: `${lesson}/build.loader.js`,
      dataUrl: `${lesson}/build.data.unityweb`,
      frameworkUrl: `${lesson}/build.framework.js.unityweb`,
      codeUrl: `${lesson}/build.wasm.unityweb`,
    });

  const openFullscreen = () => {
    requestFullscreen(true);
  };

  const handleClickBack = async () => {
    try {
      await unload();
      router.back();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth='xl'>
      <Box className='py-2'>
        {isLoaded && <BackButton onClick={handleClickBack} />}
      </Box>

      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <SideBar isLoadingUnity={!isLoaded} />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <Step isLoading={!isLoaded} />
          <UnityCanvas
            isLoaded={isLoaded}
            openFullscreen={openFullscreen}
            unityProvider={unityProvider}
          />
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default AssigmentPage;
