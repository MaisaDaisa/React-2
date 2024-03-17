import React from "react";
import ArrowUp from "../../../assets/images/arrow-up.svg";
import ArrowDown from "../../../assets/images/arrow-down.svg";
import { render } from "react-dom";

const TableRowCell = ({
	imgSrc,
	personName,
	status,
	ratingPerc,
	movePerc,
	projectSold,
	highestSales,
}) => {
    const isGrowing = (movePerc > 0);

    return (
        <React.Fragment>
            {imgSrc && personName && (
                <td className="flex items-center gap-2">
                    <img src={imgSrc} alt="person" className="w-8 h-8 rounded-full" />
                    <p className="text-sm">{personName}</p>
                </td>
            )}

            {status && (
                status === "Verified" ||
                status === "Pending" ||
                status === "Unverified"
            ) && (
                <td className="flex justify-start items-center">
                    <p className={`${
                        status === "Verified"
                            ? "text-verified-text bg-verified-bg"
                            : status === "Pending"
                                ? "text-pending-text bg-pending-bg"
                                : "text-unverified-text bg-unverified-bg"
                    }  p-1 rounded-lg text-sm`}>
                    {status}</p>
                </td>
            )}

            {ratingPerc && movePerc && (
                ratingPerc !== 0 && movePerc !== 0
            ) ? (
                <td className="flex flex-row justify-start items-center gap-3 col-span-2 ">
                    <div className="flex flex-row flex-nowrap justify-center items-center gap-2 w-36">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100"
                            height="4"
                            viewBox="0 0 100 4"
                            fill="none">
                            <rect width="100" height="4" rx="2" fill="#F2F2F2" />
                            <rect width={`${ratingPerc}`} height="4" rx="2" fill="#4C4C4C" />
                        </svg>
                        <p className=" text-zinc-500 text-sm font-normal leading-normal">
                            {ratingPerc}%
                        </p>
                    </div>
                    <div
                        className={`flex rounded-md justify-center items-center gap-1 p-1 ${isGrowing ? "bg-verified-bg" : "bg-red-bg"}`} >
                        <img
                            src={isGrowing ? ArrowUp : ArrowDown}
                            alt="arrow"
                            className="w-3 h-3"
                        />
                        <p
                            className={`text-sm font-normal ${isGrowing ? "text-verified-text" : "text-logout-red"}`}>
                                {movePerc}%{" "}
                            </p>
                    </div>
                </td>
            ) : (
                <td className=" text-zinc-500 text-md font-light leading-normal col-span-2">No ratings available</td>
            )}

            {projectSold && (
                <td className=" flex justify-start items-center text-zinc-500 text-md font-normal leading-none">{projectSold}</td>
            )}

            {highestSales && (
                <td className=" flex justify-start items-center text-zinc-500 text-md font-normal leading-none">{highestSales}</td>
            )}
        </React.Fragment>
    );
};

export default TableRowCell;
