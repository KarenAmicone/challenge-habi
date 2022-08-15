import styled from "styled-components";

export const StyledHero = styled.section`
	align-items: center;
	background-image: url(/assets/images/apartment.jpg);
	background-size: cover;
	display: flex;
	height: 100vh;
	justify-content: center;
	padding: 0 2rem;
	width: 100%;
`;

export const Overlay = styled.div`
	align-items: center;
	backdrop-filter: blur(30px);
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	height: 50%;
	justify-content: center;
	max-width: 450px;
	padding: 0 2rem;
	row-gap: 2rem;
	text-align: center;
	width: 100%;
`;

export const ButtonContainer = styled.div`
	max-width: 300px;
	width: 100%;
`;
