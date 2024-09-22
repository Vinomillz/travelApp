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
					className='
    w-full h-48               /* Default for small screens (mobile) */
    sm:w-56 sm:h-64           /* For screens >= 640px */
    md:w-64 md:h-72           /* For screens >= 768px */
    lg:w-72 lg:h-80           /* For screens >= 1024px */
    xl:w-80 xl:h-96           /* For screens >= 1280px */
    object-cover rounded-lg shadow-lg
  '
				/>
				<img
					src={"/Rectangle 3 (1).png"}
					alt='Image 2'
					className='
    w-full h-48               /* Default for small screens (mobile) */
    sm:w-56 sm:h-64           /* For screens >= 640px */
    md:w-64 md:h-72           /* For screens >= 768px */
    lg:w-72 lg:h-80           /* For screens >= 1024px */
    xl:w-80 xl:h-96           /* For screens >= 1280px */
    object-cover rounded-lg shadow-lg
  '
				/>
				<img
					src={"/Rectangle 3 (2).png"}
					alt='Image 3'
					className='
    w-full h-48               /* Default for small screens (mobile) */
    sm:w-56 sm:h-64           /* For screens >= 640px */
    md:w-64 md:h-72           /* For screens >= 768px */
    lg:w-72 lg:h-80           /* For screens >= 1024px */
    xl:w-80 xl:h-96           /* For screens >= 1280px */
    object-cover rounded-lg shadow-lg
  '
				/>
				<img
					src={"/Rectangle 3 (3).png"}
					alt='Image 4'
					className='
    w-full h-48               /* Default for small screens (mobile) */
    sm:w-56 sm:h-64           /* For screens >= 640px */
    md:w-64 md:h-72           /* For screens >= 768px */
    lg:w-72 lg:h-80           /* For screens >= 1024px */
    xl:w-80 xl:h-96           /* For screens >= 1280px */
    object-cover rounded-lg shadow-lg
  '
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
