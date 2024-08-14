import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	return (
		<div class="banner d-flex container--full-width">
			<h1 className="h1-large">{attributes.heading}</h1>
			<p>{attributes.content}</p>
		</div>
	);
}
