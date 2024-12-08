import { useEffect, useRef, useState } from 'react';

const RenderingCount = () => {
  const [count, setCount] = useState(1);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log('Rendering count :', renderCount.current);
  });

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
};

export default RenderingCount;
