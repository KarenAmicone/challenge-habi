import styled from "styled-components";

export const StyledModal = styled.div`
	align-items: center;
	background-color: rgba(0, 0, 0, 0.4);
	bottom: 0;
	display: flex;
	height: 100vh;
	justify-content: center;
	left: 0;
	padding: 0 1rem;
	position: fixed;
	right: 0;
`;

export const ModalContent = styled.div`
	background-color: #fff;
	border-radius: 20px;
	max-height: 70vh;
	max-width: 500px;
	overflow-y: scroll;
`;

export const ModalHeader = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1rem 2rem;
`;

export const CloseButton = styled.button`
	align-items: center;
	background: none;
	border: none;
	display: flex;
	font-size: 20px;
	height: 40px;
	justify-content: center;
	padding: 0;
	position: relative;
	right: -20px;
	top: -10px;
	width: 40px;
`;

export const ModalBody = styled.div`
	border-bottom: 1px solid #eee;
	border-top: 1px solid #eee;
	display: flex;
	flex-direction: column;
	padding: 2rem;
	row-gap: 1rem;
`;
