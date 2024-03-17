import React from "react";
import TimeDisplayer from "./TimeDisplayer";

const index = () => {
    console.log(Date.now())
	return (
		<div className="flex flex-row justify-between items-center bg-table-secondary-row rounded-md p-8">
			<div className="flex flex-row gap-2">
				<TimeDisplayer display="10" />
				<div className="flex flex-col gap-2 justify-center items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="2"
						height="2"
						viewBox="0 0 2 2"
						fill="none">
						<circle cx="1" cy="1" r="1" fill="#4C4C4C" />
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="2"
						height="2"
						viewBox="0 0 2 2"
						fill="none">
						<circle cx="1" cy="1" r="1" fill="#4C4C4C" />
					</svg>
				</div>
                <TimeDisplayer display="34" />
                <TimeDisplayer display="PM" type='green'/>
			</div>
            <p className="text-default font-semibold leading-loose">11/05/2022</p>
		</div>
	);
};

export default index;
