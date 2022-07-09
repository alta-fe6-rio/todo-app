/** @format */

import axios from 'axios';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const Inbox = () => {
	const [complete, setComplete] = useState('not complete');
	const [task, setTask] = useState([]);
	const [remove, setRemove] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchData();
	}, []);

	function fetchData() {
		axios
			.get('https://api.todoist.com/rest/v1/tasks', { headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` } })
			.then((res) => {
				setTask(res.data);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}

	function handleRemove(id) {
		axios
			.delete(`https://api.todoist.com/rest/v1/tasks/${id}`, { headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` } })
			.then((res) => {
				setRemove(res.data);
				alert('sucessfully deleted');
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
				{task.map((item, index) => {
					return (
						<div className='m-12 rounded-sm shadow-md mb-5' key={index}>
							<div className='bg-slate-300/30 py-3 px-6'>Tasks</div>
							<div className='grid grid-cols-1 md:grid-cols-3 p-6'>
								<div>
									<h1 className='font-semibold'>Item</h1>
									<div className='pt-8'>
										<h1>{item.content}</h1>
									</div>
								</div>
								<div>
									<h1 className='font-semibold'>Status</h1>
									<div className='pt-8'>
										<h1>{complete}</h1>
									</div>
								</div>
								<div>
									<h1 className='font-semibold'>Action</h1>
									<div className='pt-8 text-white space-x-2'>
										<button className='bg-sky-500 py-2 px-4 rounded-sm hover:bg-sky-600'>Complete</button>
										<button className='bg-red-500 py-2 px-4 rounded-sm hover:bg-red-600' onClick={() => handleRemove(item.id)}>
											Delete
										</button>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</Layout>
		);
	}
};

export default Inbox;
