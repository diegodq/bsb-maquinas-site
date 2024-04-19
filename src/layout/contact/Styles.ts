import styled from "styled-components";

export const Container = styled.div`
	padding: 50px 0;
	background-color: #f5f5f5;
	display: flex;
	justify-content: center;
	border-top: 1px solid #e0e0e0;
`;

export const DivContent = styled.div`
	display: flex;

	@media(max-width: 1151px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const Text = styled.h3`
	max-width: 500px;
	font: 1.2rem poppins, sans-serif;
	margin-left: 30px;

	@media(max-width: 1151px) {
		text-align: center;
		margin-top: 20px;
		margin-left: 0;
	}
`;