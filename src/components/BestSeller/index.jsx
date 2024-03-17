import React from "react";
import BestSellerRow from "./BestSellerRow";

const index = ({ category, children }) => {
	return (
		<div className="flex flex-col justify-center items-center w-96 p-4 bg-table-secondary-row rounded-md">
			<h3 className="font-black font-semibold text-lg leading-8 mt-8">Best-Seller {category}</h3>
			<div className="flex flex-col gap-5 mt-6">
				{children.map((child) => {
					return (
						<BestSellerRow
							imgSrc={child["imgSrc"]}
							name={child["name"]}
							sales={child["sales"]}
							revenue={child["revenue"]}
						/>
					);
				})}
			</div>
            <button className="mt-5 p-2 bg-nature-green rounded-md text-default">
                View all {category}
            </button>
		</div>
	);
};

export default index;
