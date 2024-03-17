import React from "react";
import TimeDisplayer from "./TimeDisplayer";

const index = () => {
    let time = new Date();
	return (
		<div className="flex flex-row justify-between items-center bg-table-secondary-row rounded-md p-8">
			<div className="flex flex-row gap-2">
				<TimeDisplayer display={time.getHours() - 12} />
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
                <TimeDisplayer display={time.getMinutes()} />
                <TimeDisplayer display={time.getHours() > 12 ? "PM" : "AM"} type='green'/>
			</div>
            <p className="text-lg font-semibold leading-loose">{time.getDate()} / {time.getMonth()+1} / {time.getFullYear()}</p>
		</div>
	);
};

export default index;
