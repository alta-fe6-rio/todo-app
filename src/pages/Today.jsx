/** @format */
import { BsChatLeft, BsThreeDots } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';

const Today = () => {
	return (
		<Layout>
			<div className='m-12 rounded-sm'>
				<div>
					<h1>Today</h1>
					<div className='flex justify-end space-x-3 cursor-pointer'>
						<BsChatLeft />
						<BsThreeDots />
					</div>
				</div>
				<ul className='mt-4'>
					<li className='grid grid-cols-2'>
						<div>
							<input type='checkbox' />
							<span className='pl-3'>Gym</span>
						</div>
						<span className='flex justify-end text-slate-500'>Personal</span>
					</li>
				</ul>
				<Link to='/create-task'>
					<div className='mt-8 cursor-pointer hover:bg-slate-50 hover:rounded-sm py-2'>
						<span className='text-xl'>+</span>
						<span className='pl-4'>Add a task</span>
					</div>
				</Link>
			</div>
		</Layout>
	);
};

export default Today;
