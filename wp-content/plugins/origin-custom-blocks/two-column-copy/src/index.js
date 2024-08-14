import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";

import attributes from "./attributes";
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

registerBlockType(metadata.name, {
	attributes,
	edit: Edit,
	save,
});
