import React from "react";

const index = ({ type, display }) => {
	return (
		<div
			className={`p-3 rounded-md border-[1px] 
            ${type == "green" ? " " : "border-light-gray"} 
            ${type == "green" ? "bg-nature-green" : "bg-table-secondary-row"}`}>
                <p className="text-sm text-default font-semibold">
                    {display}
                </p>
            </div>
	);
};

export default index;
