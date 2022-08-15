import Stepper from "../components/atoms/stepper/stepper";
import Step from "../components/organisms/step/step";
import { steps } from "../utils/steps";

const Wizard = ({ step }) => {
	return (
		<>
			<Stepper steps={steps} />
			<Step step={step} />
		</>
	);
};

export default Wizard;
