import { useState } from 'react';

export default function Friends() {
  const [names, setNames] = useState(['짱구', '짱아']);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setNames((prevState) => {
      return [...prevState, input];
    });
  };

  return (
    <div className="App">
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
      <ul>
        {names.map((name, idx) => {
          return <li key={idx}>{name}</li>;
        })}
      </ul>
    </div>
  );
}

// 만약 초기값을 함수로 지정하고 싶다면?
// const nameArr = () => {
//   return ["짱구", "짱아"];
// };

// export default function App() {
//   const [names, setNames] = useState(() => {
//     return nameArr();
//   });
//   const [input, setInput] = useState("");

//   // ...
// }
