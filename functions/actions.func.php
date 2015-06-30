<?php
	// Assets
	add_action( 'wp_enqueue_scripts', 'theme_styles' );
	add_action( 'wp_enqueue_scripts', 'theme_scripts' );

	// Hide Emoji Scripts
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );

	// Remove recent comments styling
	add_action( 'widgets_init', 'remove_recent_comments_style' );
