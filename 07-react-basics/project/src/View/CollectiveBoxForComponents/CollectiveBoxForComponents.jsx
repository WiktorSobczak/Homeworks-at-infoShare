import { ComponentBox } from "./ComponentBox/ComponentBox";
import { Description } from "./Description/Description";
import { Picture } from "./Picture/Picture";
import { Price } from "./Price/Price";
import { SectionTextBox } from "./SectionTextBox/SectionTextBox";

function CollectiveBoxForComponents() {
	return (
		<ComponentBox>
			<Picture />
			<SectionTextBox>
				<Description />
				<Price />
			</SectionTextBox>
		</ComponentBox>
	);
}
export default CollectiveBoxForComponents;
