import { useEffect, useState } from "react";
import { Label } from "../label/label";
import { BodyText, Title } from "../text/text";
import { FieldSet, Legend, RadioContainer } from "./radio.styles";

const Radio = ({
	options,
	label,
	name,
	subOptions,
	register,
	value,
	required,
	errors,
}) => {
	const [showSubOption, setShowSubOption] = useState();
	useEffect(() => {
		value === "Sí" ? setShowSubOption(true) : setShowSubOption(false);
	}, [value]);
	return (
		<>
			<FieldSet>
				<Legend>{label}</Legend>
				{options.map((option) => (
					<RadioContainer key={option}>
						<input
							type="radio"
							id={option}
							name={name}
							value={option}
							{...register(name, {
								value: value,
								onChange: (e) =>
									e.target.value === "Sí"
										? setShowSubOption(true)
										: setShowSubOption(false),
								required: required ? "Este campo es requerido" : null,
							})}
						></input>
						<Label htmlFor={option}>{option}</Label>
					</RadioContainer>
				))}
			</FieldSet>
			{errors[name] && (
				<BodyText color="#c23935">{errors[name]?.message}</BodyText>
			)}
			{showSubOption && subOptions && (
				<>
					<Title color="#8412ff">{subOptions.description}</Title>
					<FieldSet>
						<Legend>{subOptions.label}</Legend>
						{subOptions.options.map((option) => (
							<RadioContainer key={option}>
								<input
									type="radio"
									id={subOptions.name}
									name={subOptions.name}
									value={option}
									{...register(subOptions.name, {
										value: value,
										required: required ? "Este campo es requerido" : null,
									})}
								></input>
								<Label htmlFor={option}>{option}</Label>
							</RadioContainer>
						))}
					</FieldSet>
					{errors[subOptions.name] && (
						<BodyText color="#c23935">
							{errors[subOptions.name]?.message}
						</BodyText>
					)}
				</>
			)}
		</>
	);
};
export default Radio;
