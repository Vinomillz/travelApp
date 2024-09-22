import { BiChevronUp } from "react-icons/bi";
import { Link } from "react-router-dom";

const Explore = () => {
	return (
		<div
			className='relative flex flex-col h-screen bg-cover bg-center'
			style={{ backgroundImage: "url('/homebackground.jpeg') " }}
		>
			{/* Text Section */}
			<div className='flex flex-col items-center justify-center flex-grow text-center'>
				<p className='font-jaldi font-bold text-white text-[9vw] leading-tight mb-4'>
					Explore Your <br /> Favourite Journey
				</p>
				<span className='text-white font-jaldi font-normal text-[4vw] leading-tight'>
					Let’s make our life so alive
				</span>
			</div>

			{/* Button Section */}
			<div className='flex justify-center'>
				<button className='w-[64px] h-[100px] rounded-full bg-blue-500 flex items-center justify-center relative'>
					<div className='absolute bottom-4 animate-bounce'>
						<BiChevronUp className='text-white text-2xl' />
					</div>
					<p className='text-white font-bold'>
						<Link to='/Home'>Go</Link>
					</p>
				</button>
			</div>
		</div>
	);
};

export default Explore;
