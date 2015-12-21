<?php
	// Add supp
	add_theme_support( 'menus' );
	add_theme_support( 'post-thumbnails' );

	// Remove recent comments styling
	function remove_recent_comments_style() {  
		global $wp_widget_factory;  
		remove_action( 'wp_head', array( $wp_widget_factory->widgets['WP_Widget_Recent_Comments'], 'recent_comments_style' ) );  
	}
