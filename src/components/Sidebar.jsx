/** @format */
import { Link } from 'react-router-dom';

import { VscInbox } from 'react-icons/vsc';
import { BsCalendar2Date } from 'react-icons/bs';
import { CgCalendarDates } from 'react-icons/cg';
import { AiFillAppstore } from 'react-icons/ai';

const SideBar = () => {
	return (
		<div className='bg-slate-50 w-72 h-screen dark:bg-slate-600'>
			<ul className='mt-8 cursor-pointer space-y-2'>
				<Link to='/inbox'>
					<li className='flex items-center space-x-3 py-1 pl-5 mr-2 hover:bg-slate-200 dark:hover:bg-slate-500 hover:rounded-md'>
						<VscInbox className='text-sky-400 text-xl' />
						<span className='dark:text-white'>Inbox</span>
					</li>
				</Link>
				<Link to='/today'>
					<li className='flex items-center space-x-3 py-1 pl-5 mr-2 hover:bg-slate-200 dark:hover:bg-slate-500 hover:rounded-md'>
						<BsCalendar2Date className='text-lime-600 text-xl' />
						<span className='dark:text-white'>Today</span>
					</li>
				</Link>
				<Link to='/upcoming'>
					<li className='flex items-center space-x-3 py-1 pl-5 mr-2 hover:bg-slate-200 dark:hover:bg-slate-500 hover:rounded-md'>
						<CgCalendarDates className='text-indigo-600 text-xl' />
						<span className='dark:text-white'>Upcoming</span>
					</li>
				</Link>
				<Link to='/filter'>
					<li className='flex items-center space-x-3 py-1 pl-5 mr-2 hover:bg-slate-200 dark:hover:bg-slate-500 hover:rounded-md'>
						<AiFillAppstore className='text-orange-600 text-xl' />
						<span className='dark:text-white'>Filters & Label</span>
					</li>
				</Link>
			</ul>
		</div>
	);
};

export default SideBar;
