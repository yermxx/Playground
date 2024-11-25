import { useState } from 'react';

// BEFORE:
// export default function FeedbackForm() {
//   const [isSent, setIsSent] = useState(false);
//   if (isSent) {
//     return <h1>Thank you!</h1>;
//   } else {
//     // eslint-disable-next-line
//     const [message, setMessage] = useState('');
//     return (
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           alert(`Sending: "${message}"`);
//           setIsSent(true);
//         }}
//       >
//         <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
//         <br />
//         <button type="submit">Send</button>
//       </form>
//     );
//   }
// }

// AFTER:
// 모든 hook은 컴포넌트 함수의 최상위 수준에서만 호출 가능

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');

  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Sending: "${message}"`);
          setIsSent(true);
        }}
      >
        <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}
