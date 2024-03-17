import React from "react";
import Profile from "./../../../assets/images/Mecedes.svg";
import Notification from "./../../../assets/images/notification.svg";
import BestSeller from "../../BestSeller";
import Bluenose from "../../../assets/images/BlueNose.png";
import Flotsam from "../../../assets/images/Flotsam.png";
import Siuuuuuuuu from "../../../assets/images/Siu.svg";

import PurpleMoon from "../../../assets/images/PurpleMoon.png";
import Astronaut from "../../../assets/images/Astronaut.png";
import Moon from "../../../assets/images/Moon.png";

import Clock from "../../Clock";

const index = () => {
	return (
		<div className="flex flex-col items-end p-16">
			<div className="flex flex-row justify-between gap-10">
				<div className="flex flex-row gap-2">
					<img src={Profile} alt="Profile picture" className="rounded-full" />
					<div>
						<h3>Karim Benzema</h3>
						<p className="text-sm text-alt-gray">Admin</p>
					</div>
				</div>
				<img
					src={Notification}
					alt="notification bell"
					className="w-10 h-10 p-2 bg-sidebar-background rounded-full"
				/>
			</div>
			<div className="flex flex-col gap-8 mt-20">
				<BestSeller
					category="artists"
					children={[
						{ imgSrc: Flotsam, name: "Flotsam", sales: "40k", revenue: "1.4m" },
						{
							imgSrc: Siuuuuuuuu,
							name: "Siuuuuu",
							sales: "40k",
							revenue: "1.4m",
						},
						{
							imgSrc: Bluenose,
							name: "Bluenose",
							sales: "40k",
							revenue: "1.4m",
						},
					]}
				/>
				<BestSeller
					category="projects"
					children={[
						{
							imgSrc: PurpleMoon,
							name: "Flotsam",
							sales: "40k",
							revenue: "1.4m",
						},
						{
							imgSrc: Astronaut,
							name: "Astrom",
							sales: "10k",
							revenue: "1.4m",
						},
						{ imgSrc: Moon, name: "$Moon", sales: "10k", revenue: "1.4m" },
					]}
				/>
				<Clock />
			</div>
		</div>
	);
};

export default index;
