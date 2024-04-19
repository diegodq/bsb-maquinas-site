import styled from "styled-components";

export const DivContent = styled.div`
	padding: 25px 25px;
	background-color: #ededed;
	border-top: 1px solid #e0e0e0;
`;

export const TitleContent = styled.h1`
	font: 1.4rem poppins, sans-serif;
	color: black;
	margin-top: 11px;
	display: block;
	text-align: center;
	margin-bottom: 50px;
	font-weight: bold;
`;

export const Img = styled.img`
	@media(max-width: 980px) {
		width: 500px;
	}

	@media(max-width: 535px) {
		width: 300px;
	}
`;

export const DivOne = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 55px;

	@media(max-width: 980px) {
		flex-direction: column;
		align-items: center;
	}

	@media(max-width: 534px) {
		flex-direction: column-reverse;
	}
`;

export const Div = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 55px;

	@media(max-width: 980px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const TextOne = styled.p`
	font: 1.4rem poppins, sans-serif;
	font-weight: bold;
	color: black;
	width: 390px;
	line-height: 27px;

	@media(max-width: 980px) {
		text-align: center;
	}
`;

export const TextTwo = styled.p`
	font: 1.3rem poppins, sans-serif;
	color: black;
	width: 390px;
	margin-top: 11px;

	@media(max-width: 980px) {
		text-align: center;
	}
`;

export const DivText = styled.div`

`;