import { Fragment } from "react";
import useResults from "../../../hooks/useResults";
import { BodyText, Span, Title } from "../../atoms/text/text";
import { Container, Flex } from "./results.styles";

const Results = () => {
	const { results } = useResults();

	return (
		<Flex>
			<Container>
				<Title color="#8412ff">Resultados</Title>
				{results.map((element) => (
					<Fragment key={element.label}>
						{element.val !== "" && (
							<BodyText weight="600" size="20px">
								{element.label}: <Span color="#263c3c">{element.val}</Span>
							</BodyText>
						)}
						{element.subOptions && element.subOptions.val !== "" && (
							<BodyText weight="600" size="20px">
								{element.subOptions.label}:{" "}
								<Span color="#263c3c">
									{element.subOptions.val === "Sí" ? "Cubierto" : "No cubierto"}
								</Span>
							</BodyText>
						)}
					</Fragment>
				))}
			</Container>
		</Flex>
	);
};

export default Results;
