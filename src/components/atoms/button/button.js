import styled from "styled-components";

export const Button = styled.button`
	background: ${(props) =>
		props.primary ? "none" : props.secondary ? "#8412FF" : "none"};
	border: ${(props) =>
		props.primary
			? "2px solid #fff"
			: props.secondary
			? "none"
			: "2px solid #8412FF"};
	border-radius: ${(props) => (props.primary ? "8px" : "20px")};
	color: ${(props) =>
		props.primary ? "white" : props.secondary ? "white" : "#8412FF"};
	cursor: pointer;
	font-size: ${(props) => (props.primary ? "30px" : "20px")};
	padding: 0.5rem 1rem;
	width: ${(props) => props.width || "100%"};
	&:hover {
		border-color: ${(props) => props.primary && "#8412ff"};
		color: ${(props) => props.primary && "#8412ff"};
	}
`;
