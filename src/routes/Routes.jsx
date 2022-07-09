/** @format */
import { useEffect, useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Err404 from '../pages/Err404';
import Homepage from '../pages/Homepage';
import Upcoming from '../pages/Upcoming';
import CreateTodo from '../pages/CreateTodo';
import Edit from '../pages/Edit';
import { ThemeContext } from '../utils/context';

const RouteApp = () => {
	const [theme, setTheme] = useState('light');
	const background = useMemo(() => ({ theme, setTheme }), [theme]);
	document.title = 'Todoist';

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
					<Route path='/upcoming' element={<Upcoming />} />
					<Route path='/create-todo' element={<CreateTodo />} />
					<Route path='/edit/:id' element={<Edit />} />
				</Routes>
			</BrowserRouter>
		</ThemeContext.Provider>
	);
};

export default RouteApp;
