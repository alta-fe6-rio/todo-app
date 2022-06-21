/** @format */

import Header from './Header';
import SideBar from './Sidebar';

const Layout = (props) => {
	return (
		<div>
			<Header />
			<div className='flex'>
				<SideBar />
				<div className='w-full dark:bg-slate-500 dark:text-white'>{props.children}</div>
			</div>
		</div>
	);
};

export default Layout;
