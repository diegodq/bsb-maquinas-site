import {Container, TitleBrands, BrandsImage} from "./Styles.ts";
const BrandImage = '/images/brands.png';
import React from "react";

const Brands: React.FC = () => {
	return (
		<Container>
			<TitleBrands>Trabalhamos com as principais marcas:</TitleBrands>
			<BrandsImage src={BrandImage} />
		</Container>
	)
}

export default Brands;