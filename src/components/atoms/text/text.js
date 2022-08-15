import styled from "styled-components";

export const Title = styled.h1`
	color: ${(props) => props.color || "#fff"};
	font-size: 30px;
	margin: 0;
`;

export const Subtitle = styled.h2`
	color: ${(props) => props.color || "#fff"};
	font-size: 20px;
	font-weight: 600;
	margin: 0;
`;

export const BodyText = styled.p`
	color: ${(props) => props.color || "#8412ff"};
	font-size: ${(props) => props.size || "16px"};
	font-weight: ${(props) => props.weight || "400"};
	margin: 0;
`;

export const Span = styled.span`
	color: ${(props) => props.color || "#8412ff"};
	font-weight: ${(props) => props.weight || "400"};
`;
