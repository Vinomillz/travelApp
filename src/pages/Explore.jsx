import { BiChevronUp } from "react-icons/bi";
import { Link } from "react-router-dom";

const Explore = () => {
	return (
		<div
			className='relative flex flex-col h-screen bg-cover bg-center'
			style={{
				backgroundImage:
					"url('https://s3-alpha-sig.figma.com/img/5db4/8f00/93f0ebbd1297b5084ce639dc13eb5bab?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iYzJNlvVbRh2bRr4JSzLVsCuG49SZiQk4Lw0mgy5upb5MRxFgbmL28K6h1S~g6NRgS~a1YTP7NVkN6RcQNtGoQUv8PR0OY84sVi5ca9xnPexUPVcpxzLHGM7KKxhmDglUiMAj2BihISlhGrbJwdwbRIrplo0B4OBDheMwbwJ5InxgtxLJREY~EAosU9QS9ElVwIfyF3O2FshktV2q8tc5QZ~8CnvY3rSw5WUT7hwx6v72rTWja5bimyuWhvnEs5WXQ9RC4Jy1dqpqPV77EFwZmkVdX24Vksgs2n5AGm6um5LWTY5rL5vgEdRbCslVEpPegZlhvdBlUO~d5eOF3B3eg__')",
			}}
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
			<div className='flex justify-center mb-10'>
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
