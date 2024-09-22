import { BiHome } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiBellAlert } from "react-icons/hi2";
import { FcLike } from "react-icons/fc";
import ImageSlider from "../components/ImageSlider";

const Home = () => {
	return (
		<div
			className='relative h-screen bg-cover bg-center'
			style={{ backgroundImage: "url('/HomePage.jpeg')" }}
		>
			{/* Overlay */}
			<div className='absolute inset-0 bg-black opacity-50'></div>

			{/* Fixed Top Bar */}
			<div className='fixed  top-0 left-0 right-0 flex justify-between items-center p-4  z-50'>
				<span>
					<GiHamburgerMenu className='w-[30px] h-[30px] text-white' />
				</span>

				{/* User Image */}
				<a href='/Profile'>
					<span>
						<FaRegUserCircle className='w-[30px] h-[30px] text-white' />
					</span>
				</a>
			</div>

			{/* Main content section */}
			<div className='h-full pt-16 relative'>
				<h2
					className='
				text-white text-2xl font-bold mb-4 text-left m-2 '
				>
					Discover
					<p className='text-white text-lg font-medium '>
						Explore the Best Places in the world !
					</p>
				</h2>

				<input
					type='search'
					id='search'
					name='search'
					placeholder='Search your destination'
					className='w-4/5 px-4 py-2 bg-gray-600 text-white border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
				/>

				<nav className='flex space-x-6 pt-4 font-semibold justify-center w-full text-center '>
					<a href='#' className='text-yellow-300 hover:text-blue-700'>
						All
					</a>
					<a href='#' className='text-blue-500 hover:text-blue-700'>
						Singapore
					</a>
					<a href='#' className='text-blue-500 hover:text-green-700'>
						South Africa
					</a>
					<a href='#' className='text-blue-500 hover:text-green-700'>
						Thailand
					</a>
				</nav>

				<br />
				<ImageSlider />
				<br />

				<div>
					<h2 className='font-medium text-left ml-6 text-lg text-[white] '>
						Popular Categories
					</h2>
					<div className='relative mt-8 w-full'>
						{/* Slider Container */}
						<div className='grid grid-cols-5'>
							{/* Images */}
							<div className='flex flex-col items-center'>
								<img
									src={"/Rectangle 6.png"}
									alt='Trips'
									className='object-cover rounded-lg shadow-lg'
								/>
								<p className='mt-2 text-center text-sm text-[white] font-medium'>
									Trips
								</p>
							</div>
							<div className='flex flex-col items-center'>
								<img
									src={"/Rectangle 7.png"}
									alt='Image 1'
									className='object-cover rounded-lg shadow-lg'
								/>
								<p className='mt-2 text-center text-sm font-medium text-[white] '>
									Stays
								</p>
							</div>
							<div className='flex flex-col items-center'>
								<img
									src={"/Rectangle 8.png"}
									alt='Image 1'
									className='object-cover rounded-lg shadow-lg'
								/>
								<p className='mt-2 text-center text-sm font-medium text-[white] '>
									Transport
								</p>
							</div>
							<div className='flex flex-col items-center'>
								<img
									src={"/Rectangle 9.png"}
									alt='Image 1'
									className='object-cover rounded-lg shadow-lg'
								/>
								<p className='mt-2 text-center text-sm font-medium text-[white] '>
									Events
								</p>
							</div>
							<div className='flex flex-col items-center'>
								<img
									src={"/Rectangle 10.png"}
									alt='Image 1'
									className='object-cover rounded-lg shadow-lg'
								/>
								<p className='mt-2 text-center text-sm font-medium text-[white] '>
									Eateries
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Navigation Bar */}
			<div className='bg-gray-800 bg-opacity-75 text-white fixed bottom-0 left-0 right-0 z-50'>
				<div className='flex justify-around items-center p-4'>
					{/* Home Tab */}
					<a href='#' className='flex items-center space-x-2  p-2 rounded'>
						<BiHome className='text-2xl' />
						<span>Home</span>
					</a>

					{/* Search Tab */}
					<a href='search' className='flex items-center space-x-2  p-2 rounded'>
						<FaLocationDot className='text-2xl' />
						<span></span>
					</a>

					{/* Messages Tab */}
					<a href='alert' className='flex items-center space-x-2  p-2 rounded'>
						<HiBellAlert className='text-2xl' />
						<span></span>
					</a>

					{/* Friends Tab */}
					<a href='Likes' className='flex items-center space-x-2  p-2 rounded'>
						<FcLike className='text-2xl' />
						<span></span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
