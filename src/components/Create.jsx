/** @format */

const AddTask = () => {
	return (
		<div className='m-12 rounded-sm shadow-md'>
			<div className='bg-slate-300/30 py-3 px-6'>Add a task</div>
			<div className='p-5 space-y-4'>
				<div className='flex flex-col space-y-1'>
					<label for='todo-desc'>Item</label>
					<input
						type='text'
						name='todo-desc'
						id='todo-desc'
						placeholder='What do you want todo?'
						className='border py-1 px-2 focus:ring-1 focus:ring-sky-600 focus:outline-none dark:bg-slate-400 dark:placeholder:text-white dark:border-none dark:focus:ring-slate-300'
					/>
					<div className='text-white pt-2'>
						<button className='bg-sky-500 py-2 px-4 rounded-sm hover:bg-sky-600'>Post</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export { AddTask };
