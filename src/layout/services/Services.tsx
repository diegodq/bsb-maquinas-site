import { Container, ServiceText, Title, DivIconTexts, Icon, DivTexts, H3, P } from "./Styles";

const iconOne = '/images/about-icon1.png';
const iconTwo = '/images/about-icon2.png';

const Services = () => {
  return (
    <Container id="services">
			<Title>Compromisso com a excelência. Nossas vantagens são:</Title>
      <ServiceText>
				<DivIconTexts>
					<Icon src={iconOne} />
					<DivTexts>
						<H3>Instalação</H3>
						<P>
							Instalamos seus equipamentos e configuramos para o perfeito funcionamento.
						</P>
					</DivTexts>
				</DivIconTexts>
				<DivIconTexts>
					<Icon src={iconTwo} />
					<DivTexts>
						<H3>Conserto</H3>
						<P>
							Contamos com profissionais capacitados, treinados nas melhores empresas de eletrodomésticos do país.
						</P>
					</DivTexts>
				</DivIconTexts>
				<DivIconTexts>
					<Icon src={iconTwo} />
					<DivTexts>
						<H3>Manutenção</H3>
						<P>
							A manutenção é essencial para evitar desgastes prematuros, paradas inesperadas e gastos elevados com reparos.
						</P>
					</DivTexts>
				</DivIconTexts>
			</ServiceText>
    </Container>
  )
}

export default Services;