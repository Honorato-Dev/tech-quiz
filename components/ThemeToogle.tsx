import { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { useTheme } from 'next-themes'
import { BsSunFill } from 'react-icons/bs';

const ThemeToogle = () => {
  const [darkMode, setDarkMode] = useState(true);
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme == 'dark') setDarkMode(true);
  }, []);

   // Função para alternar entre os temas
   const toggleTheme = () => {
    // Inverte o tema atual
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setDarkMode(!darkMode)
  };

  return (
    <>
      <div
        className="relative  w-16 h-3/4 flex items-center  bg-[#20a3cf] cursor-pointer rounded-tr-lg rounded-tl-lg  rounded-br-lg  rounded-bl-lg  p-1"
        onClick={() => toggleTheme()}
      >
        <FaMoon className="text-gray-950" size={18} />
        <div
          className="absolute bg-white dark:bg-medium w-6 h-6 rounded-tr-lg rounded-bl-lg rounded-br-lg rounded-tl-lg   shadow-md transform transition-transform duration-300"
          style={darkMode ? { left: '2px' } : { right: '2px' }}
        ></div>
        <BsSunFill
        className='ml-auto text-yellow-400'
        size={18}
        />
      </div>
      
    </>
  );
};

export default ThemeToogle;
