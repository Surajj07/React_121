import { useContext } from 'react';
import './App.css';
import { ThemeContext } from './context/ThemeContextProvider';

function App() {
  const [theme,toggleTheme]=useContext(ThemeContext)
  return (
    <div className={`${App} ${theme==="light" ? "buttonLight" :"buttonDark"}`}>
      <button onClick={toggleTheme}>change theme</button>
    </div>
  );
}

export default App;
