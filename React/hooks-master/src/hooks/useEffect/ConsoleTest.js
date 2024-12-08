import { useEffect, useState } from 'react';

export default function ConsoleTest() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // 처음 마운팅 됐을때만 실행됨
  useEffect(() => {
    console.log('처음 렌더링 됐을때만!!');
  }, []);

  // 렌더링마다 매번 실행됨
  useEffect(() => {
    console.log('렌더링 ok');
  });

  // 마운팅 + count 변화할때마다 실행됨
  useEffect(() => {
    console.log('count change');
  }, [count]);

  // 마운팅 + name 변화할때마다 실행됨
  useEffect(() => {
    console.log('name change');
  }, [name]);

  return (
    <div className="App">
      <p>count: {count}</p>
      <button onClick={handleCountUpdate}>Upload</button>
      <p>name: {name}</p>
      <input type="text" onChange={handleInputChange} />
    </div>
  );
}
