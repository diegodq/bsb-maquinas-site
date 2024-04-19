import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	background-color: #F5F5F5;
	padding: 40px 0;
	border-top: 1px solid #e0e0e0;
`;

export const TitleBrands = styled.h2`
	font: 1.5rem poppins, sans-serif;
	text-align: center;
`;

export const BrandsImage = styled.img`
	height: 200px;
	display: block;
	margin: 15px auto;

	@media(max-width: 502px) {
		height: 170px;
	}

	@media(max-width: 480px) {
		height: 100px;
	}
`;