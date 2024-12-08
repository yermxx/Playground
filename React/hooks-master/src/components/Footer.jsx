import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Footer() {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <footer
      className="footer"
      style={{ backgroundColor: isDark ? 'black' : 'lightblue', color: isDark ? 'white' : 'black' }}
    >
      <button onClick={toggleTheme}>Dark Mode</button>
    </footer>
  );
}
