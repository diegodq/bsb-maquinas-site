// import {FormEvent, useCallback, useState } from "react";
// import {Form, TitleForm, TextArea, TextForm, Input, Submit} from "./Styles.ts";
import {Form, TitleForm, TextForm,Link, LogoImg} from "./Styles.ts";
const logoWhatsApp = '/images/whatsapp-button.png';

// type Email = {
// 	email: string,
// }

// interface EmailHandle
// {
// 	(event: FormEvent<HTMLInputElement>): void;
// }

// interface HandleForm 
// { 
// 	preventDefault: () => void;
// }

// type HandleSubmit = {
// 	(event: HandleForm): void,
// }

const FormRequestService: React.FC = () => {

	// const [ email, setEmail ] = useState<Email>({} as Email);

	// const emailHandle: EmailHandle = useCallback( (event: React.FormEvent<HTMLInputElement>) => {
	// 	setEmail({
	// 		...email,
	// 		[event.currentTarget.name]: event.currentTarget.value
	// 	});
	// }, [email]);

	// const handleSubmit: HandleSubmit = (event: HandleForm): void => {
	// 	event.preventDefault();

	// }

	return (
		// <Form method="POST" action="/contact/service" onSubmit={handleSubmit}>
		<Form>
			<TitleForm>
				PEDIDO DE SERVIÇO
			</TitleForm>
			{/* <TextForm>
				Digite seu nome e dados de contato para nos ajudar a melhor lhe atender.
			</TextForm> */}
			<TextForm>
				Toque ou clique em fazer pedido para nos ajudar a melhor lhe atender.
			</TextForm>
			<LogoImg src={logoWhatsApp} alt="Logo whatsapp" />
			{/* <Input type="text" name="name" id="name" placeholder="Nome" />
			<Input type="text" name="email" id="email" placeholder="E-mail" />
			<Input type="tel" name="phone" id="phone" placeholder="Telefone" onChange={emailHandle} />
			<TextArea name="text" id="text" placeholder="Pedido" /> */}
			{/* <Submit type="submit" value="Fazer pedido" /> */}
			<Link href="https://wa.me/55556195612864?text=Ol%C3%A1%21+Quero+saber+mais+sobre+o+seu+servi%C3%A7o.">Fazer pedido</Link>
		</Form>
	)
}

export default FormRequestService;