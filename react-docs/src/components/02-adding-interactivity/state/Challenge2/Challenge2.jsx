// 폼 입력 고치기

import { useState } from 'react';

// BEFORE:
// export default function Form() {
//   let firstName = '';
//   let lastName = '';

//   function handleFirstNameChange(e) {
//     firstName = e.target.value;
//   }

//   function handleLastNameChange(e) {
//     lastName = e.target.value;
//   }

//   function handleReset() {
//     firstName = '';
//     lastName = '';
//   }

//   return (
//     <form onSubmit={(e) => e.preventDefault()}>
//       <input placeholder="First name" value={firstName} onChange={handleFirstNameChange} />
//       <input placeholder="Last name" value={lastName} onChange={handleLastNameChange} />
//       <h1>
//         Hi, {firstName} {lastName}
//       </h1>
//       <button onClick={handleReset}>Reset</button>
//     </form>
//   );
// }

// AFTER:
export default function Form() {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');

  function handleFirstNameChange(e) {
    setfirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setlastName(e.target.value);
  }

  function handleReset() {
    setfirstName('');
    setlastName('');
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input placeholder="First name" value={firstName} onChange={handleFirstNameChange} />
      <input placeholder="Last name" value={lastName} onChange={handleLastNameChange} />
      <h1>
        Hi, {firstName} {lastName}
      </h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
