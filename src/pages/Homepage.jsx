/** @format */
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Homepage = () => {
	return (
		<Layout>
			<div className='w-full p-12 flex flex-col space-y-4'>
				<h1 className='select-none'>Welcome</h1>
				<Link to='/create-todo'>
					<div className='cursor-pointer w-full px-4 hover:bg-slate-50 hover:rounded-md py-2 dark:hover:bg-slate-400'>
						<span className='text-xl'>+</span>
						<span className='pl-4'>Add Todo</span>
					</div>
				</Link>
			</div>
		</Layout>
	);
};

export default Homepage;
