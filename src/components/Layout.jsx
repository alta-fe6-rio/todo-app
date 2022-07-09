/** @format */

import Header from './Header';

const Layout = (props) => {
	return (
		<div  className='w-full h-screen dark:bg-slate-500 dark:text-white'>
			<Header />
			<div className='flex flex-col sm:flex-row'>
				<div className='w-full'>{props.children}</div>
			</div>
		</div>
	);
};

export default Layout;
