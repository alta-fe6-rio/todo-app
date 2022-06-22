/** @format */
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { BsSun, BsFillMoonStarsFill } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { SiTodoist } from 'react-icons/si';

import { ThemeContext } from '../utils/context';

const Header = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	const handleThemeChange = (mode) => {
		setTheme(mode);
		localStorage.setItem('theme', mode);
	};

	return (
		<nav className='bg-red-500 w-full h-auto py-3 px-4 flex dark:bg-slate-700'>
			<Link to='/'>
				<SiTodoist className='text-white text-3xl' />
			</Link>
			<label className='ml-12'>
				<div className='flex items-center'>
					<FaSearch className='absolute ml-2 text-white' />
					<input type='text' placeholder='Search' className='pl-8 py-1 rounded-md bg-slate-100 bg-opacity-40 placeholder:text-white focus:ring-1 focus:ring-slate-200 focus:outline-none text-white' />
				</div>
			</label>
			<div className='ml-auto flex justify-center items-center text-white'>
				<button>{theme === 'dark' ? <BsSun onClick={() => handleThemeChange('light')} /> : <BsFillMoonStarsFill onClick={() => handleThemeChange('dark')} />}</button>
			</div>
		</nav>
	);
};

export default Header;
