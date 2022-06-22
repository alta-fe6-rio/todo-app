/** @format */

import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';

const Upcoming = () => {
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
				<div className='mx-12 my-8 space-y-8'>
					{task.map((item, index) => {
						return (
							<div key={index} className='rounded-sm items-center'>
								<div className='bg-slate-300/30 sm:mx-36 p-4'>
									<div>{item.content}</div>
									<div>{item.due && <p>{item.due.date}</p>}</div>
									<div className='space-x-4'>
										<button className='bg-red-500 px-4 py-1 rounded-sm text-white mt-3' onClick={() => handleRemove(item.id)}>
											Delete
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</Layout>
		);
	}
};

export default Upcoming;
