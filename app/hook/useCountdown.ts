import {useEffect, useState} from 'react';

export const useCountDown = (initalStart: boolean, initalDuration?: number) => {
  let durationDefault: number = 30;
  const [isStart, setIsStart] = useState(initalStart);
  const [duration, setDuration] = useState(initalDuration ?? durationDefault);

  useEffect(() => {
    if (isStart) {
      setTimeout(() => setDuration(previousState => previousState - 1), 1000);
      if (duration === 0) {
        setIsStart(false);
      }
    }
  }, [duration]);

  const reCountDown = (duration?: number) => {
    if (isStart === false) {
      setDuration(duration ?? initalDuration ?? durationDefault);
      setIsStart(true);
    }
  };
  return {
    isStart: isStart,
    duration: duration,
    reCountDown: reCountDown,
  };
};
