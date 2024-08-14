<?php
/**
 * Plugin Name:       Origin Custom Blocks Plugin
 * Description:       Custom blocks starter plugin
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.0.1
 * Author:            Sam Medhurst
 * License:           test-license
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       origin-custom-blocks
 *
 * @package           origin-custom-blocks
 */

$version = '1.0.0';

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function origin_block_library_init() {
	register_block_type( __DIR__ . '/image-aside/build' );
	register_block_type( __DIR__ . '/banner/build' );
	register_block_type( __DIR__ . '/single-column-copy/build' );
}
add_action( 'init', 'origin_block_library_init' );

function origin_allowed_blocks( $allowed_block_types, $editor_context ) {
	return array(
		'create-block/image-aside',
		'create-block/banner',
		'create-block/single-column-copy',
		'core/heading',
		'core/paragraph',
	);
}

add_filter( 'allowed_block_types_all', 'origin_allowed_blocks', 10, 2 );

//Remove Gutenberg Block Library CSS from loading on the frontend
function smartwp_remove_wp_block_library_css(){
 wp_dequeue_style( 'wp-block-library' );
 wp_dequeue_style( 'wp-block-library-theme' );
 wp_dequeue_style( 'wc-blocks-style' ); // Remove WooCommerce block CSS
} 
add_action( 'wp_enqueue_scripts', 'smartwp_remove_wp_block_library_css', 100 );