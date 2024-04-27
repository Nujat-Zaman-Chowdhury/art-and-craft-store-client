

const CraftItemSection = () => {
    return (
        <div>
            <div className="text-center mt-10 ">
                <h2>Explore Our Craft Items</h2>
                <p>Browse through our collection below and click on "View Details" to uncover the secrets behind these exquisite treasures.</p>
            </div>
            <div className="grid grid-cols-3 gap-4 container mx-auto mt-10 px-12">
            <div className="flex flex-col overflow-hidden bg-orange-50  rounded-md shadow-lg w-80">
				<div className="flex flex-col items-center justify-center px-3 py-4 space-y-4 h-[300px]">
					<img src="banner1.jpg" className="w-full h-full rounded-md object-cover mx-auto" alt="" />
				</div>
				<div className="flex flex-col items-center justify-center px-2 py-8">
					<ul className="self-stretch flex-1 space-y-2">
						<li className="flex justify-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
							<span>Lumet consectetur adipisicing</span>
						</li>
						<li className="flex justify-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
							<span>Lumet consectetur adipisicing</span>
						</li>
						<li className="flex justify-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
							<span>Lumet consectetur adipisicing</span>
						</li>
					</ul>
					<button className="px-8 py-3 mt-3 text-lg font-semibold rounded sm:mt-12 bg-orange-400 hover:bg-orange-500 text-white font-lato">View Details</button>
				</div>
			</div>
			
        </div>
        </div>
    );
};

export default CraftItemSection;