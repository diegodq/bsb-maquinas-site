import {DivContent, TitleContent, Img, TextOne, TextTwo, Div, DivText, DivOne} from "./Styles.ts";
import React from "react";

const imgOne = '/images/mt-2045-home-img1.png';
const imgTwo = '/images/mt-2045-home-img2.png';

const Content: React.FC = () => {
	return (
		<DivContent id="about">
			<TitleContent>Serviço prestado com excelência, garantia e preço justo</TitleContent>
			<DivOne>
				<DivText>
					<TextOne>
						Somos especializados no conserto de lava e seca em Brasília, manutenção de máquinas de lavar.
					</TextOne>
					<TextTwo>
						Contamos com uma equipe capacitada para realizar o conserto, a instalação e a manutenção das principais marcas: LG, Samsung, Brastemp, Consul e Electrolux.
					</TextTwo>
				</DivText>

				<Img src={imgOne} />
			</DivOne>
			<Div>
				<Img src={imgTwo} />

				<DivText>
					<TextOne>
						Assistência Técnica, conserto, manutenção, higienização e instalação.
					</TextOne>
					<TextTwo>
						Dispomos do serviço de conserto na nossa loja, mas dependendo do serviço, ele pode ser efetuado na residência do cliente, não sendo necessária retirada do aparelho.
					</TextTwo>
				</DivText>
			</Div>
		</DivContent>
	)
}

export default Content;