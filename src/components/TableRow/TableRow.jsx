import React from "react";
import './TableRow.css'

const TableRow = ({ RowStyle, children }) => {
	return (
		<>
			<tr
				className={`${RowStyle === "main" ? "bg-table-main-row" : "bg-table-secondary-row"} p-3 grid grid-cols-6 border-light-gray`}>
				{children}
			</tr>
		</>
	);
};

export default TableRow;
