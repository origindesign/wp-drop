import { useBlockProps } from "@wordpress/block-editor";
import { RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	return (
		<div class="single-column-copy inner-grid">
			<h2 className="h2">{attributes.heading}</h2>
			<RichText.Content tagName={"p"} value={attributes.content} />
		</div>
	);
}
