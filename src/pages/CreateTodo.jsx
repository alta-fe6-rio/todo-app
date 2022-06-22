/** @format */

import Layout from '../components/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

const CreateTodo = () => {
	const [loading, setLoading] = useState(true);
	const [addPost, setAddPost] = useState({});

	useEffect(() => {
		postData();
	}, []);

	function postData() {
		axios({
			method: 'post',
			url: 'https://api.todoist.com/rest/v1/tasks',
			data: addPost,
			headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
		})
			.then((res) => {
				setAddPost(res.data);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => setLoading(false));
	}

	function handleChange(e) {
		setAddPost({ ...addPost, [e.target.name]: e.target.value });
	}

	function sendData() {
		postData();
		alert('todo sukses dibuat.\nsilahkan pergi ke halaman upcoming untuk melihat detail.');
	}

	if (loading) {
		return <div className='h-screen flex justify-center items-center text-2xl'>Loading...</div>;
	} else {
		return (
			<Layout>
				<div className='m-12 rounded-sm shadow-md'>
					<div className='bg-slate-300/30 py-3 px-6'>Add a todo</div>
					<div className='p-5 space-y-4'>
						<div className='flex flex-col space-y-1'>
							<label for='content'>Item</label>
							<input
								onChange={handleChange}
								type='text'
								name='content'
								id='content'
								placeholder='What do you want todo?'
								className='border py-1 px-2 focus:ring-1 focus:ring-sky-600 focus:outline-none dark:bg-slate-400 dark:placeholder:text-white dark:border-none dark:focus:ring-slate-300'
							/>
							<div className='text-white pt-2'>
								<button className='bg-sky-500 py-2 px-4 rounded-sm hover:bg-sky-600' onClick={() => sendData()}>
									Post
								</button>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
};

export default CreateTodo;
