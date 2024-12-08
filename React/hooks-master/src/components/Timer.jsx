import { useEffect } from 'react';

const Timer = (props) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('타이머 실행중');
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log('타이머 종료!!');
    };
  }, []);

  return (
    <>
      <span>타이머를 시작합니다.</span>
    </>
  );
};

export default Timer;
