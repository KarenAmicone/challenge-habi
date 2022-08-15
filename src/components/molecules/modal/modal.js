import { Fragment } from "react";
import { BodyText, Span, Title } from "../../atoms/text/text";
import {
	CloseButton,
	ModalBody,
	ModalContent,
	ModalHeader,
	StyledModal,
} from "./modal.styles";

const Modal = ({ title, body, openModal, setOpenModal }) => {
	return (
		openModal && (
			<StyledModal>
				<ModalContent>
					<ModalHeader>
						<Title color="#263c3c">{title}</Title>
						<CloseButton onClick={() => setOpenModal(false)}>x</CloseButton>
					</ModalHeader>
					<ModalBody>
						{body.map((element) => (
							<Fragment key={element.label}>
								{element.val !== "" && (
									<BodyText weight="600">
										{element.label}: <Span color="#263c3c">{element.val}</Span>
									</BodyText>
								)}
								{element.subOptions && element.subOptions.val !== "" && (
									<BodyText weight="600">
										{element.subOptions.label}:{" "}
										<Span color="#263c3c">
											{element.subOptions.val === "Sí"
												? "Cubierto"
												: "No cubierto"}
										</Span>
									</BodyText>
								)}
							</Fragment>
						))}
					</ModalBody>
				</ModalContent>
			</StyledModal>
		)
	);
};

export default Modal;
