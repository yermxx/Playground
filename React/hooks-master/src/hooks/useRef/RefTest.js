import { useRef, useState } from 'react';

export default function RefTest() {
  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const doRendering = () => {
    setRenderer(renderer + 1);
  };

  const increaseRef = () => {
    countRef.current += 1;
    console.log('ref: ', countRef.current);
  };

  const increaseVar = () => {
    countVar++;
    console.log('var: ', countVar);
  };

  const printResults = () => {
    console.log(`ref: ${countRef.current}, var: ${countVar}`);
  };

  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>var: {countVar}</p>
      <button onClick={doRendering}>Rendering...🎨</button>
      <button onClick={increaseRef}>Ref Up</button>
      <button onClick={increaseVar}>var Up</button>
      <button onClick={printResults}>Show "Ref & var"</button>
    </div>
  );
}
