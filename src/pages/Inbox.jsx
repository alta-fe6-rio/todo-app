/** @format */

import Layout from '../components/Layout';

const Inbox = () => {
	return (
		<Layout>
			<div className='m-12 rounded-sm shadow-md'>
				<div className='bg-slate-300/30 py-3 px-6'>Tasks</div>
				<div className='grid grid-cols-1 md:grid-cols-3 p-6'>
					<div>
						<h1 className='font-semibold'>Item</h1>
						<div className='pt-8'>
							<h1>Gym</h1>
						</div>
					</div>
					<div>
						<h1 className='font-semibold'>Status</h1>
						<div className='pt-8'>
							<h1>Not Complete</h1>
						</div>
					</div>
					<div>
						<h1 className='font-semibold'>Action</h1>
						<div className='pt-8 text-white space-x-2'>
							<button className='bg-sky-500 py-2 px-4 rounded-sm hover:bg-sky-600'>Complete</button>
							<button className='bg-red-500 py-2 px-4 rounded-sm hover:bg-red-600'>Delete</button>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Inbox;
