import { Link } from "react-router-dom";
import { Button } from "../../atoms/button/button";
import { Span, Subtitle, Title } from "../../atoms/text/text";
import { ButtonContainer, Overlay, StyledHero } from "./hero.styles";

const Hero = () => {
	return (
		<StyledHero>
			<Overlay>
				<Title>
					Bienvenido a <Span>Habi</Span>{" "}
				</Title>
				<Subtitle>¿Quieres vender tu inmueble?</Subtitle>
				<ButtonContainer>
					<Link to="/datos-cliente">
						<Button primary>Vender</Button>
					</Link>
				</ButtonContainer>
			</Overlay>
		</StyledHero>
	);
};

export default Hero;
