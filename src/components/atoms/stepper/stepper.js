import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { Circle, Flex, Line } from "./stepper.styles";

const Stepper = ({ steps }) => {
	let location = useLocation();

	return (
		<Flex>
			{steps.map((step, index) => (
				<Fragment key={index}>
					<Circle
						focused={location.pathname === `/${step.path}` ? true : false}
					>
						{step.order}
					</Circle>
					{step.order !== steps.length && <Line numOfSteps={steps.length} />}
				</Fragment>
			))}
		</Flex>
	);
};

export default Stepper;
