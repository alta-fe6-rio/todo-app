/** @format */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsChatLeft, BsThreeDots } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';

const Today = () => {
	const [task, setTask] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchData();
	}, []);

	function fetchData() {
		axios
			.get('https://api.todoist.com/rest/v1/tasks', { headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` } })
			.then((res) => {
				console.log(res.data);
				setTask(res.data);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}

	if (loading) {
		return <div className='h-screen flex justify-center items-center text-2xl'>Loading...</div>;
	} else {
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
						{task.map((item, index) => {
							return (
								<li className='grid grid-cols-2' key={index}>
									<div>
										<input type='checkbox' />
										<span className='pl-3'>{item.content}</span>
									</div>
									<span className='flex justify-end text-slate-500'>Personal</span>
								</li>
							);
						})}
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
	}
};

export default Today;
