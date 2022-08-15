import { useSelector } from "react-redux";
import { steps } from "../utils/steps";

function useResults() {
	const state = useSelector((state) => state);
	const results = steps.map((step) => ({
		label: step.panelName,
		val: state[step.name],

		subOptions:
			step.subOptions !== undefined
				? {
						label: step.subOptions?.panelName,
						val: state[step.subOptions?.name],
				  }
				: null,
	}));
	return { results };
}

export default useResults;
