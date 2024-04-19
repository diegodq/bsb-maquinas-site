import styled from "styled-components";

export const Container = styled.div`
	width: 180px;
	height: 59px;
	font: 1rem poppins, sans-serif;
	color: white;

	@media(max-width: 1160px) {
		margin-right: 70px;
		display: none;
	}

	@media(max-width: 544px ) {
		margin-left:  20px;
	}
`;

export const ContainerTextPhone = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-top:5px;
`;

export const Text = styled.h1`
	text-align: center;
	display: block;
`;

export const PhoneIcon = styled.img`

`;

export const LinkPhone = styled.a`
	font: 1rem poppins, sans-serif;
	color: white;
	text-decoration: none;
	margin-left: -16px;
`;