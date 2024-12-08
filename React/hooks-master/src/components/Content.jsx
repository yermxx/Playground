import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

export default function Content() {
  const { isDark } = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <div
      className="content"
      style={{ backgroundColor: isDark ? 'black' : 'lightblue', color: isDark ? 'white' : 'black' }}
    >
      <p>{user}님, 안녕하세요!</p>
    </div>
  );
}
