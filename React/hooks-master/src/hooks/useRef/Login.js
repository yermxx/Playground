import { useEffect, useRef } from 'react';

export default function Login() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`환영합니다. ${inputRef.current.value}!!`);
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" placeholder="username..." />
      <button onClick={login}>Log-in</button>
    </>
  );
}
