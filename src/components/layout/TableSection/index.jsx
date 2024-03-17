import React from "react";
import Searchbar from "../../SearchBar/Searchbar";
import Filter from "./../../../assets/images/filter-search.svg";
import TableNavButton from "./TableNavButton/TableNavButton";
import TableRow from "../../TableRow/TableRow";
import TableRowCell from "../../TableRow/TableRowCell/TableRowCell";
import Bluenose from "../../../assets/images/BlueNose.png";
import Pennywise from "../../../assets/images/PennyWise.svg";
import Flotsam from "../../../assets/images/Flotsam.png";
import Gregautsch from "../../../assets/images/Gregautsch.svg";
import ElPistolero from "../../../assets/images/ElPistolero.svg";
import Siuuuuuuuu from "../../../assets/images/Siu.svg";

const index = () => {
	return (
		<div>
			<div className="flex justify-between gap-1">
				<div className="flex flex-col flex-start">
					<h2 className="text-neutral-600 text-lg font-semibold leading-loose">
						All artists
					</h2>
					<p className="text-zinc-400 text-xs font-normal leading-none mt-1">
						Monitor artist sales, reviews, etc.
					</p>
				</div>
				<div className="flex flex-row flex-end items-end gap-3">
					<Searchbar
						customClassName="p-2 h-10"
						placeholder="Search artists"
						loopClass="py-2"
					/>
					<button className="flex flex-nowrap flex-row justify-center items-center h-10 gap-2 rounded-sm p-2 border-1 border-neutral-200">
						<img src={Filter} alt="Filter" />
						<p>Filter</p>
					</button>
				</div>
			</div>
			<table className="flex flex-col rounded-md mt-8 ">
				<TableRow RowStyle="main">
					<td>Artist</td>
					<td>Status</td>
					<td className="col-span-2">Ratings</td>
					<td>Projects sold</td>
					<td>Revenue</td>
				</TableRow>
				<TableRow>
					<TableRowCell
						imgSrc={Bluenose}
						personName="Bluenose"
						status={"Verified"}
						ratingPerc={100}
						movePerc={10}
						projectSold={100}
						highestSales={"$100,000"}
					/>
				</TableRow>
				<TableRow>
					<TableRowCell
						imgSrc={Pennywise}
						personName="Pennywise"
						status={"Pending"}
						ratingPerc={57}
						movePerc={-8}
						projectSold={400}
						highestSales={"$400,000"}
					/>
				</TableRow>
                <TableRow>
                    <TableRowCell 
                        imgSrc={Flotsam}
                        personName="Flotsam"
                        status={"Verified"}
                        ratingPerc={89}
                        movePerc={19}
                        projectSold={40000}
                        highestSales={"$1,400,000"}
                    />

                </TableRow>
                <TableRow>
                    <TableRowCell 
                        imgSrc={Gregautsch}
                        personName="Gregautsch"
                        status={"Unverified"}
                        ratingPerc={0}
                        movePerc={0}
                        projectSold={0}
                        highestSales={"$0"}
                    />
                </TableRow>
                <TableRow>
                    <TableRowCell 
                        imgSrc={ElPistolero}
                        personName="ElPistolero"
                        status={"Verified"}
                        ratingPerc={50}
                        movePerc={-6}
                        projectSold={300}
                        highestSales={"$25,000"}
                    />
                </TableRow>
                <TableRow>
                    <TableRowCell 
                        imgSrc={Siuuuuuuuu}
                        personName="Siuuuuuuuuu"
                        status={"Pending"}
                        ratingPerc={64}
                        movePerc={7}
                        projectSold={30}
                        highestSales={"$400,000"}
                    />
                </TableRow>
				<TableRow RowStyle="main">
					<button>Previous page</button>
					<div className="flex justify-evenly gap-3 w-full">
						<TableNavButton text="1" />
						<TableNavButton text="2" />
						<TableNavButton text="3" />
						<TableNavButton text="4" />
						<TableNavButton text="5" />
					</div>
					<button>Next page</button>
				</TableRow>
            
			</table>
		</div>
	);
};

export default index;
