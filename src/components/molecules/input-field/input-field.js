import CurrencyInput from "react-currency-input-field";
import { Input } from "../../atoms/input/input";
import { Label } from "../../atoms/label/label";
import { BodyText } from "../../atoms/text/text";
import { StyledInputField } from "./input-field.styles";

const InputField = ({
	label,
	name,
	type = "text",
	placeholder,
	register,
	rules,
	value,
	errors,
	required,
	max,
}) => {
	return (
		<StyledInputField>
			<Label htmlFor={name}>{label}</Label>
			{name !== "price" && (
				<Input
					id={name}
					placeholder={placeholder ? placeholder : label}
					{...register(name, {
						value: value,
						max: max,
						pattern: rules,
						required: required ? "Este campo es requerido" : null,
					})}
					type={type}
				/>
			)}
			{name === "price" && (
				<CurrencyInput
					id={name}
					className="currency-input"
					placeholder={placeholder ? placeholder : label}
					prefix="$"
					decimalsLimit={2}
					{...register(name, {
						value: value,
						required: required ? "Este campo es requerido" : null,
					})}
				/>
			)}
			{errors && <BodyText color="#c23935">{errors[name]?.message}</BodyText>}
		</StyledInputField>
	);
};

export default InputField;
