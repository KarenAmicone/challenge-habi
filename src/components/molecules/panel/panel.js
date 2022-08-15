import { Fragment } from "react";
import useResults from "../../../hooks/useResults";
import { BodyText, Span, Title } from "../../atoms/text/text";
import { Card } from "./panel.styles";

const Panel = () => {
	const { results } = useResults();
	return (
		<Card>
			<Title color="#263c3c">Resumen</Title>
			{results.map((element) => (
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
								{element.subOptions.val === "Sí" ? "Cubierto" : "No cubierto"}
							</Span>
						</BodyText>
					)}
				</Fragment>
			))}
		</Card>
	);
};

export default Panel;
