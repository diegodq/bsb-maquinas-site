import styled from "styled-components";

export const Container = styled.div`
  background-color: #1C1B1A;
	padding: 25px 0;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 100%;

	@media(max-width: 1070px) {
		flex-direction: column;
	}
`;

export const LogoBottom = styled.img`
  height: 130px;

	@media(max-width: 480px) {
		margin-bottom: 20px;
	}
`;

export const DivColumns = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media(max-width: 1070px) {
		margin-bottom: 20px;
	}
`;

export const DivColumnLogo = styled.div`
	display: flex;
	align-items: center;

	@media(max-width: 1070px) {
		justify-content: center;
		margin-bottom: 30px;
	}

	@media(max-width: 480px) {
		flex-direction: column;
	}
`;

export const TitleLogo = styled.p`
	color: white;
	font: 1.1rem poppins, sans-serif;
	max-width: 280px;
	margin-left: 15px;
`;

export const TitleColumns = styled.p`
	font: 1.2rem poppins, sans-serif;
	color: white;
	
`;

export const Nav = styled.nav`
	margin-top: 9px;
`;

export const Ul = styled.ul`

`;

export const Li = styled.li`
	@media(max-width: 1070px) {
		text-align: center;
	}
	& + & {
		margin-top: 8px;
	}
`;

export const Link = styled.a`
	font: 1rem poppins, sans-serif;
	color: white;
	text-decoration: none;
	
	&:hover {
		border-bottom: 1px solid white;
	}
`;

export const Text = styled.p`
	font: 1rem poppins, sans-serif;
	color: white;
	margin-top: 5px;
`;

export const LinkPhone = styled.a`
	font: 1rem poppins, sans-serif;
	color: white;
	margin-top: 5px;
	text-decoration: none;
`;