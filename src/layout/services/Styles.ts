import styled from "styled-components";

export const Container = styled.div`
	padding: 50px 0;
	background-color: #f5f5f5;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border-top: 1px solid #e0e0e0;
`;

export const ServiceText = styled.div`
	display: flex;

	@media(max-width: 1280px) {
		flex-direction: column;
	}

	@media(max-width: 1150px) {
		margin-top: 20px;
		justify-content: center;
	}
`;

export const DivContent = styled.div`
	display: flex;
	max-width: 1110px;

	@media(max-width: 1150px) {
		flex-direction: column;
	}
`;

export const Title = styled.h2`
	font: 1.5rem poppins, sans-serif;
	font-weight: bold;
	margin-bottom: 60px;

	@media(max-width: 1150px) {
		font: 1.3rem poppins, sans-serif;
		text-align: center;
		font-weight: bold;
	}
`;

export const DivIconTexts = styled.div`
	display: flex;
	margin-bottom: 20px;
	max-width: 450px;
	padding: 20px 20px;

	@media(max-width: 475px) {
		flex-direction: column;
		align-items: center;
	}

	& + & {
		margin-left: 9px;
	}

	@media(max-width: 1280px) {
		& + & {
			margin-left: 0;
		}
	}
`;

export const Icon = styled.img`
	height: 50px;
	margin-right: 9px;
`;

export const DivTexts = styled.div`
`;

export const H3 = styled.h3`
	font: 1.4rem poppins, sans-serif;
	font-weight: bold;

	@media(max-width: 475px) {
		text-align: center;
	}
`;

export const P = styled.p`
	margin-top: 2px;
	font: 1rem poppins, sans-serif;
	line-height: 20px;

	@media(max-width: 475px) {
		text-align: center;
	}
`;