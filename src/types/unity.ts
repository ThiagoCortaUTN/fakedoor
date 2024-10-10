import { UnityProvider } from 'react-unity-webgl/distribution/types/unity-provider';

export interface UnityCanvasProps {
  unityProvider: UnityProvider;
  openFullscreen: () => void;
  isLoaded: boolean;
}
