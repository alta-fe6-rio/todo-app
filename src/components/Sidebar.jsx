/** @format */
import { Link } from 'react-router-dom';
import { CgCalendarDates } from 'react-icons/cg';

const SideBar = () => {
	return (
		<div className='bg-slate-50 sm:w-72 sm:h-screen dark:bg-slate-600'>
			<ul className='my-3 sm:mt-8 h-auto sm:space-y-6 cursor-pointer flex sm:flex-col justify-around'>
				<Link to='/upcoming'>
					<li className='flex items-center sm:space-x-3 sm:py-1 sm:pl-5 sm:mr-2 hover:text-sky-500 hover:rounded-md'>
						<CgCalendarDates className='text-indigo-600 text-xl' />
						<span className='dark:text-white'>Todo</span>
					</li>
				</Link>
			</ul>
		</div>
	);
};

export default SideBar;
