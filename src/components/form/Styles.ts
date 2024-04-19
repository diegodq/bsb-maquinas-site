import styled from "styled-components";

export const Form = styled.form`
	max-width: 360px;
	background-color: #0D8FE5;
	padding: 20px 40px 23px 25px;
	border-radius: 11px;
	box-shadow: 0 4px 8px #4d4d4d;

	@media(max-width: 1150px) {
		margin-right: 0;
	}

	@media(max-width: 475px) {
		margin: 0 12px 0 10px;
	}
`;

export const TitleForm = styled.h3`
	display: block;
	font: 1.4rem poppins, sans-serif;
	text-align: center;
	color: white;
	font-weight: bold;
	margin-bottom: 9px;
`;

export const TextForm = styled.span`
	display: block;
	font: 1.1rem poppins, sans-serif;
	text-align: center;
	color: white;
	margin-bottom: 13px;
`;

export const Label = styled.label`
	display: block;
`;

export const Input = styled.input`
	width: 100%;
	height: 49px;
	border: none;
	display: block;
	margin-bottom: 15px;
	font: 1.1rem poppins, sans-serif;
	color: grey;
	padding-left: 8px;
	border-radius: 3px;
	
	&:focus {
		outline: 0 none;
		border: 0 none;
	}
`;

export const TextArea = styled.textarea`
	resize: none;
	outline: none;
	width: 100%;
	height: 149px;
	border: none;
	font: 1.1rem poppins, sans-serif;
	color: grey;
	padding-left: 8px;
	padding-top: 8px;
	border-radius: 5px;

	&:focus {
		outline: 0 none;
		border: 0 none;
	}
`;

export const Submit = styled.input`
	font: 1rem poppins, sans-serif;
	color: #363636;
	padding: 12px 22px;
	background-color: white;
	font-weight: bold;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	margin-top: 15px;
`;

export const Link = styled.a`
	font: 1rem poppins, sans-serif;
	color: #363636;
	padding: 12px 22px;
	background-color: white;
	font-weight: bold;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	margin-top: 15px;
	display: block;
	text-decoration: none;
	text-align: center;
`;

export const LogoImg = styled.img`
  height: 100px;
	display: block;
	margin: 0 auto;
`;
