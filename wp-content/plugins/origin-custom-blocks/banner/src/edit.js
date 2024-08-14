import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";

import { RichText } from "@wordpress/block-editor";

export default function Edit({ attributes, setAttributes, className }) {
	return (
		<div class="banner d-flex">
			<div>
				<RichText
					className="h1"
					tagName="h1"
					value={attributes.heading}
					onChange={(heading) => setAttributes({ heading })}
					placeholder={__("Banner heading", "gutenberg")}
				/>
			</div>
			<RichText
				className=""
				tagName="p"
				value={attributes.content}
				onChange={(content) => setAttributes({ content })}
				placeholder={__("Banner content", "gutenberg")}
			/>
		</div>
	);
}
