import {useEffect, useState} from 'react';

export const useCountDown = (initalStart: boolean) => {
  const [isStart, setIsStart] = useState(initalStart);
  const [duration, setDuration] = useState(5);

  useEffect(() => {
    if (isStart) {
      setTimeout(() => setDuration(previousState => previousState - 1), 1000);
      if (duration === 1) {
        setIsStart(false);
      }
    }
  }, [duration]);

  const reSend = () => {
    if (duration === 0) {
      setDuration(30);
    }
  };
  return {
    duration: duration,
    reSend: reSend,
  };
};
