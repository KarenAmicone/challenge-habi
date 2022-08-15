import styled from "styled-components";

export const Flex = styled.div`
	align-items: center;
	background: white;
	display: flex;
	justify-content: center;
	padding: 5rem 1rem 0 1rem;
	position: sticky;
	top: 0;
	width: 100%;
`;

export const Circle = styled.div`
	align-items: center;
	background-color: ${(props) => (props.focused ? "white" : "#8412ff")};
	border: ${(props) => (props.focused ? "1px solid #8412ff" : "none")};
	border-radius: 50%;
	color: ${(props) => (props.focused ? "#8412ff" : "white")};
	display: flex;
	height: 30px;
	justify-content: center;
	padding: 0;
	width: 30px;
`;

export const Line = styled.div`
	background-color: #8412ff;
	height: 2px;
	width: ${(props) =>
		`calc((100% - (30px * ${props.numOfSteps})) / ${props.numOfSteps})`};
`;
