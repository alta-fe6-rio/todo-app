/** @format */
import { useEffect, useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Err404 from '../pages/Err404';
import Homepage from '../pages/Homepage';
import Inbox from '../pages/Inbox';
import Today from '../pages/Today';
import Upcoming from '../pages/Upcoming';
import Filter from '../pages/Filter';
import CreateTask from '../pages/CreateTask';
import CreateTodo from '../pages/CreateTodo';
import { ThemeContext } from '../utils/context';

const RouteApp = () => {
	const [theme, setTheme] = useState('light');
	const background = useMemo(() => ({ theme, setTheme }), [theme]);

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={background}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='*' element={<Err404 />} />
					<Route path='/inbox' element={<Inbox />} />
					<Route path='/today' element={<Today />} />
					<Route path='/upcoming' element={<Upcoming />} />
					<Route path='/filter' element={<Filter />} />
					<Route path='/create-task' element={<CreateTask />} />
					<Route path='/create-todo' element={<CreateTodo />} />
				</Routes>
			</BrowserRouter>
		</ThemeContext.Provider>
	);
};

export default RouteApp;
