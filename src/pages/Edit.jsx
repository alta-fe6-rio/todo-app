/** @format */

import { useEffect, useState } from 'react';
import apiRequest from '../utils/apiRequest';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/Layout';

const Edit = () => {
	const params = useParams();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const [detail, setDetail] = useState({});
	const [content, setContent] = useState('');

	useEffect(() => {
		getTodo();
	}, [])

	const getTodo = () => {
		const { id } = params;
		apiRequest(`https://api.todoist.com/rest/v1/tasks/${id}`, 'get')
			.then((res) => {
				setDetail(res);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => setLoading(false));
	};

	const postUpdate = () => {
		const { id } = params;
		apiRequest(`https://api.todoist.com/rest/v1/tasks/${id}`, 'post', { content })
			.then(() => {
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => navigate('/upcoming'));
	}

	if (loading) {
		return <div className='h-screen flex justify-center items-center text-2xl'>Loading...</div>;
	} else {
		return (
			<Layout>
				<div className='m-12 rounded-sm shadow-md'>
					<div className='bg-slate-300/30 py-3 px-6'>Edit your Todo</div>
					<div className='p-5 space-y-4'>
						<div className='flex flex-col space-y-1'>
							<label for='content'>Item</label>
							<input
								onChange={(e) => setContent(e.target.value)}
								type='text'
								name='content'
								id='content'
								placeholder={detail.content}
								className='border py-1 px-2 focus:ring-1 focus:ring-sky-600 focus:outline-none dark:bg-slate-400 dark:placeholder:text-white dark:border-none dark:focus:ring-slate-300'
							/>
							<div className='text-white pt-2'>
								<button className='bg-sky-500 py-2 px-4 rounded-sm hover:bg-sky-600' onClick={() => postUpdate()}>
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

export default Edit;
