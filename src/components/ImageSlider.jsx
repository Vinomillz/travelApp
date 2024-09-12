import { useRef } from "react";

const ImageSlider = () => {
	const sliderRef = useRef(null);

	// Function to scroll left
	// const scrollLeft = () => {
	// 	if (sliderRef.current) {
	// 		sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
	// 	}
	// };

	// Function to scroll right
	// const scrollRight = () => {
	// 	if (sliderRef.current) {
	// 		sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
	// 	}
	// };

	return (
		<div className='relative mt-8 w-full'>
			{/* Slider Container */}
			<div
				ref={sliderRef}
				className='flex overflow-x-scroll no-scrollbar space-x-6 py-4'
			>
				{/* Images */}
				<img
					src={"/Rectangle 3.png"}
					alt='Image 1'
					className='w-72 h-80 object-cover rounded-lg shadow-lg ml-6'
				/>
				<img
					src={"/Rectangle 3 (1).png"}
					alt='Image 2'
					className='w-72 h-80 object-cover rounded-lg shadow-lg'
				/>
				<img
					src={"/Rectangle 3 (2).png"}
					alt='Image 3'
					className='w-72 h-80 rounded-lg shadow-lg'
				/>
				<img
					src={"/Rectangle 3 (3).png"}
					alt='Image 4'
					className='w-72 h-80 object-cover rounded-lg shadow-lg'
				/>
			</div>

			{/* left and right button */}
			{/* <button
				onClick={scrollLeft}
				className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none shadow-lg'
			>
				&lt;
			</button>
			<button
				onClick={scrollRight}
				className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none shadow-lg'
			>
				&gt;
			</button> */}
		</div>
	);
};

export default ImageSlider;
