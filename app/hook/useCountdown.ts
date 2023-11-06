import {delay} from '@reduxjs/toolkit/dist/utils';
import {useEffect, useRef, useState} from 'react';
import {AppState, AppStateStatus} from 'react-native';

export const useCountDown = (
  isStartImmediately: boolean = true,
  initialDuration: number = 30,
) => {
  const [isStart, setIsStart] = useState<boolean>(isStartImmediately);
  const [countDown, setCountDown] = useState<number>(initialDuration);
  const timer = useRef<NodeJS.Timer>();
  const appState = useRef(AppState.currentState);
  let backgroundAt: number = 0;

  const handleAppStateListener = (nextAppState: AppStateStatus) => {
    if (nextAppState === 'background') {
      backgroundAt = Date.now();
    } else if (nextAppState.match(/inactive|active/)) {
      if (backgroundAt !== 0) {
        setCountDown(prev =>
          Math.max(0, prev - Math.floor((Date.now() - backgroundAt) / 1000)),
        );
        backgroundAt = 0;
      }
    }
    return (appState.current = nextAppState);
  };

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      handleAppStateListener,
    );

    if (isStart) {
      timer.current = setInterval(() => {
        setCountDown(previous => {
          if (previous === 0) {
            setIsStart(false);
            clearInterval(Number(timer.current));
            return 0;
          }
          return previous - 1;
        });
      }, 1000);
      return () => {
        clearInterval(Number(timer.current));
        subscription.remove();
      };
    }
  }, [isStart]);

  const start = (countDownDuration: number = initialDuration) => {
    if (isStart === false) {
      setCountDown(countDownDuration);
      setIsStart(true);
    }
  };

  return {
    isRunning: isStart,
    value: countDown,
    start: start,
  };
};
