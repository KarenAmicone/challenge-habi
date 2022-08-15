import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms/button/button";
import Radio from "../../atoms/radio/radio";
import { Title } from "../../atoms/text/text";
import Panel from "../../molecules/panel/panel";
import InputField from "../../molecules/input-field/input-field";
import {
	ButtonsBox,
	Flex,
	OpenModal,
	StepSection,
	StyledForm,
	TitleContainer,
} from "./step.styles";
import useWDimensions from "../../../hooks/useWDimensions";
import Modal from "../../molecules/modal/modal";
import useResults from "../../../hooks/useResults";

const Step = ({ step }) => {
	const { width } = useWDimensions();
	const { results } = useResults();

	const dispatch = useDispatch();
	const selector = useSelector((state) => state[step.name]);
	let navigate = useNavigate();

	const [showInput, setShowInput] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	useEffect(() => {
		setShowInput(true);
	}, [step]);

	const {
		register,
		handleSubmit,
		unregister,
		formState: { errors },
	} = useForm({ mode: "onChange", reValidateMode: "onChange" });

	const onSubmit = (data) => {
		unregister(step.name);
		setShowInput(false);
		dispatch(step.action(data[step.name]));
		if (step.subOptions) {
			dispatch(step.subOptions.action(data[step.subOptions.name]));
		}
		localStorage.setItem([step.name], data[step.name]);
		localStorage.setItem("currentStep", step.path);
		navigate(`/${step.nextPath}`);
	};

	return (
		<Flex>
			<StepSection>
				<TitleContainer>
					<Title color="#8412ff">{step.description}</Title>
				</TitleContainer>
				<StyledForm onSubmit={handleSubmit(onSubmit)}>
					{step.component === "input-field" && showInput ? (
						<>
							<InputField
								label={step.label}
								name={step.name}
								placeholder={step.placeholder}
								register={register}
								value={selector}
								rules={step.pattern}
								errors={errors}
								type={step.type}
								required={step.required}
								max={step.max}
							/>
						</>
					) : step.component === "radio" ? (
						<>
							<Radio
								options={step.options}
								label={step.label}
								name={step.name}
								subOptions={step.subOptions}
								value={selector}
								register={register}
								required={step.required}
								errors={errors}
							/>
						</>
					) : null}
					<ButtonsBox>
						<Button onClick={() => navigate(`/${step.prevPath}`)} type="button">
							Atrás
						</Button>
						<Button type="submit" secondary>
							{step.nextPath === "resultados" ? "Finalizar " : "Siguiente"}
						</Button>
					</ButtonsBox>
				</StyledForm>
			</StepSection>
			{width >= 1024 && <Panel />}
			{width < 1024 && step.order !== 1 && (
				<OpenModal>
					<Button
						onClick={() => {
							setOpenModal(true);
						}}
						type="button"
					>
						Resumen
					</Button>
				</OpenModal>
			)}
			<Modal
				openModal={openModal}
				setOpenModal={setOpenModal}
				title={"Resultados"}
				body={results}
			/>
		</Flex>
	);
};

export default Step;
