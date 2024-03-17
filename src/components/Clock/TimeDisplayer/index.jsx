import React from "react";

const index = ({ type, display }) => {
	return (
		<div
			className={`flex justify-center items-center rounded-md border-[1px] w-10 h-10
            ${type == "green" ? " " : "border-light-gray"} 
            ${type == "green" ? "bg-nature-green" : "bg-table-secondary-row"}`}>
                <p className="text-sm text-default font-semibold">
                    {display}
                </p>
            </div>
	);
};

export default index;
