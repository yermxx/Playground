import { useState } from 'react';
import Timer from '../../components/Timer';

export default function ShowTimer() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Click</button>
    </div>
  );
}
