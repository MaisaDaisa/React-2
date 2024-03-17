import React from "react";
import SearachLoop from "./../../assets/images/searchLoop.svg";

const Searchbar = ({placeholder, customClassName, loopClass, textSize}) => {
	return (
		<div className={`flex flex-start flex-row items-center gap-2 search-bar rounded-sm relative ${customClassName}`}>
			<img src={SearachLoop} alt="" className={`absolute h-full ${loopClass ? loopClass : "py-3"}`}/>
			<input
				type="text"
				placeholder={placeholder ? placeholder : "Search"}
				className={`bg-inherit px-10 ${ textSize ? textSize : "text-sm"}`}
			/>
		</div>
	);
};

export default Searchbar;
