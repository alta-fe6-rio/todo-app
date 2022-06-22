/** @format */
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Homepage = () => {
	return (
		<Layout>
			<div className='m-12'>
				<h1>Welcome</h1>
				<Link to='/create-task'>
					<div className='mt-8 cursor-pointer hover:bg-slate-50 hover:rounded-sm py-2 dark:hover:bg-slate-400'>
						<span className='text-xl'>+</span>
						<span className='pl-4'>Add a task</span>
					</div>
				</Link>
				<Link to='/create-todo'>
					<div className='cursor-pointer hover:bg-slate-50 hover:rounded-sm py-2 dark:hover:bg-slate-400'>
						<span className='text-xl'>+</span>
						<span className='pl-4'>Add Todo</span>
					</div>
				</Link>
			</div>
		</Layout>
	);
};

export default Homepage;
