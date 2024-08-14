import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";

const TEMPLATE = [["core/image"]];
import { RichText } from "@wordpress/block-editor";

export default function Edit({ attributes, setAttributes, className }) {
	return (
		<div class="image-aside">
			<InnerBlocks template={TEMPLATE} templateLock="all" />
			<div>
				<RichText
					className="h2"
					tagName="h2"
					value={attributes.heading}
					onChange={(heading) => setAttributes({ heading })}
					placeholder={__("Heading", "gutenberg")}
				/>
				<RichText
					className=""
					tagName="p"
					value={attributes.content}
					onChange={(content) => setAttributes({ content })}
					placeholder={__("Content", "gutenberg")}
				/>
			</div>
		</div>
	);
}
