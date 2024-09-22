import { Link } from "react-router-dom";

const Profile = () => {
	return (
		<>
			<div
				className='w-full min-h-screen bg-cover bg-center'
				style={{ backgroundImage: "url('/ProfileImg.jpeg') " }}
			>
				<div className='flex py-4 justify-center items-center '>
					<img className='h-14 rounded-full ' src='./avatar.jpg' alt='' />
					<br />
				</div>
				<br />
				<p className='font-medium text-[#3f3fe7]'>Edit your Profile</p>

				<div className='flex  justify-center mt-16  '>
					<div className=''>
						<div className='flex justify-between items-center '>
							<label
								htmlFor='inputField'
								className='text-gray-700 text-lg font-medium'
							>
								Name:
							</label>
							<input
								type='text'
								id='inputField'
								className='border-none rounded-md p-2  focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
						</div>
						<br />

						<div className='flex justify-between items-center space-x-4'>
							<label
								htmlFor='inputField'
								className='text-gray-700  text-lg font-medium'
							>
								UserName:
							</label>
							<input
								type='text'
								id='inputField'
								className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
						</div>
						<br />
						<div className='flex justify-between items-center '>
							<label
								htmlFor='inputField'
								className='text-gray-700 text-lg font-medium'
							>
								Email:
							</label>
							<input
								type='text'
								id='inputField'
								className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
						</div>
						<br />
						<div className='flex justify-between items-center '>
							<label
								htmlFor='inputField'
								className='text-gray-700 text-lg font-medium'
							>
								Links:
							</label>
							<input
								type='text'
								id='inputField'
								className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
						</div>
					</div>
				</div>
				<br />
				<button
					type='submit'
					className='w-4/5 mt-4 bg-[black] text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300'
				>
					<Link to='/Explore'>Explore</Link>
				</button>
			</div>
		</>
	);
};

export default Profile;
