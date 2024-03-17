import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import MiddleSection from "./components/layout/MiddleSection/";


function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Sidebar />
			<MiddleSection />
		</>
	);
}

export default App;
