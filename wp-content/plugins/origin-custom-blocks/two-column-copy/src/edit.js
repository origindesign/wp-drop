import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";

import { RichText } from "@wordpress/block-editor";

export default function Edit({ attributes, setAttributes, className }) {
	return (
		<div class="two-column-copy">
			<div>
				<RichText
					className="h1"
					tagName="h1"
					value={attributes.heading}
					onChange={(heading) => setAttributes({ heading })}
					placeholder={__("Single col heading", "gutenberg")}
				/>
			</div>
			<RichText
				className=""
				tagName="p"
				value={attributes.content}
				onChange={(content) => setAttributes({ content })}
				placeholder={__("Single col content", "gutenberg")}
			/>
			<RichText
				className=""
				tagName="p"
				value={attributes.content_second}
				onChange={(content_second) => setAttributes({ content_second })}
				placeholder={__("Single col content", "gutenberg")}
			/>
		</div>
	);
}
