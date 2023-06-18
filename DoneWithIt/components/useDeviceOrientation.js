import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

export const useDeviceOrientation = () => {
  const [orientation, setOrientation] = useState(null);

  useEffect(() => {
    const handleOrientationChange = ({ window: { width, height } }) => {
      setOrientation(width > height ? 'landscape' : 'portrait');
    };

    Dimensions.addEventListener('change', handleOrientationChange);

    handleOrientationChange({ window: Dimensions.get('window') });

    return () => Dimensions.removeEventListener('change', handleOrientationChange);
  }, []);

  return {
    landscape: orientation === 'landscape',
    portrait: orientation === 'portrait',
  };
};
