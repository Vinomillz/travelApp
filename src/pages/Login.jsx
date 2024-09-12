import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<>
			<div className='bg-100 flex py-4 justify-center relative  items-center '>
				<p className='mr-6 font-medium'>Buddy</p>
				<br />
				<img
					className='absolute ml-6 w-20  '
					src='./mingcute_tree-4-line.png'
					alt=''
				/>
			</div>

			<div className='pb-1.5'>
				<h2 className=' mt-40 font-medium'>Create an account</h2>
				<p className='font-thin text-sm'>
					Enter your email to sign up for this app
				</p>
				<br />

				<input className='w-4/5  p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300' />
				<br />
				<button
					type='submit'
					className='w-4/5 mt-4 bg-[black] text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300'
				>
					<Link to='/Profile'>Signup with your email</Link>
				</button>
			</div>

			<div className='flex items-center justify-center'>
				<div className='h-px bg-gray-400 w-20 mr-4'></div>
				<div className='text-gray-700 text-sm font-thin'>or continue with</div>
				<div className='h-px bg-gray-400 w-20 ml-4'></div>
			</div>
			<br />
			<button> </button>

			<button className=' w-4/5 items-center   bg-[#f4f4f5] text-white px-4 py-2 rounded-md '>
				<FcGoogle className=' mr-46   ' /> <span></span>
			</button>

			<p className='py-2 text-sm text-[#94a3b8]  '>
				By clicking continue you agree to our{" "}
				<span className='text-thin text-[black]'>Terms of Service</span> and
				<span className='text-thin text-[black]'> Privacy Policy</span>
			</p>
		</>
	);
};

export default Login;
