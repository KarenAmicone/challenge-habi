import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Hero from "./components/molecules/hero/hero";
import Results from "./components/organisms/results/results";
import Wizard from "./pages/wizard";
import { steps } from "./utils/steps";

function App() {
	let navigate = useNavigate();
	const currentStep = localStorage.getItem("currentStep");
	useEffect(() => {
		currentStep ? navigate(`/${currentStep}`) : navigate("/");
		// eslint-disable-next-line
	}, []);

	return (
		<Routes>
			<Route path="/" element={<Hero />} />
			{steps.map((step) => (
				<Route
					key={step.order}
					path={step.path}
					element={<Wizard step={step} />}
				/>
			))}
			<Route path="/resultados" element={<Results />} />
		</Routes>
	);
}

export default App;
