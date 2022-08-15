import styled from "styled-components";

export const Flex = styled.section`
	align-items: center;
	display: flex;
	flex-direction: column;
	padding: 2rem 3rem;
	@media (min-width: 1024px) {
		flex-direction: row;
		justify-content: space-between;
	}
	@media (min-width: 1280px) {
		padding: 0 6rem;
	}
`;

export const StepSection = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 60vh;
	justify-content: center;
	row-gap: 3rem;
	width: 100%;
	align-items: center;
	@media (min-width: 768px) {
		min-height: 70vh;
	}
	@media (min-width: 1024px) {
		align-items: baseline;
		min-height: 80vh;
		width: 58%;
	}
	@media (min-width: 1280px) {
		padding: 2rem 0;
	}
`;

export const TitleContainer = styled.div`
	display: flex;
	max-width: 600px;
	width: 100%;
`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 600px;
	row-gap: 3rem;
	width: 100%;
`;

export const ButtonsBox = styled.div`
	align-self: end;
	column-gap: 3rem;
	display: flex;
	width: 100%;
	@media (min-width: 768px) {
		width: 60%;
	}
`;

export const OpenModal = styled.div`
	align-self: center;
	margin: 2rem 0;
	width: 200px;
`;
