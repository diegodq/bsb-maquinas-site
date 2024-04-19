import {Container, DivContent, Text} from "./Styles.ts";
import FormRequestService from "../../components/form/FormRequestService.tsx";
import React from "react";

const RequestService: React.FC = () => {
	return (
		<Container id="contact">
			<DivContent>
				<FormRequestService />
				{/* <Text>Por favor, preencha o formulário para solicitar um orçamento para serviços de manutenção de suas máquinas de lavar. Nossa equipe especializada está pronta para oferecer soluções eficientes e confiáveis para garantir o funcionamento ideal de seus equipamentos.</Text> */}
				<Text>Por favor, Toque ou clique em fazer pedido para solicitar um orçamento para serviços de manutenção de suas máquinas de lavar. Nossa equipe especializada está pronta para oferecer soluções eficientes e confiáveis para garantir o funcionamento ideal de seus equipamentos.</Text>
			</DivContent>
		</Container>
	)
}

export default RequestService;