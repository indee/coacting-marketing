<?php 
	// Website Styles
	function theme_styles() {
		wp_enqueue_style( 'font-awesome', get_template_directory_uri() . '/dist/bower_components/font-awesome/css/font-awesome.min.css');
		wp_enqueue_style( 'maincss', get_template_directory_uri() . '/dist/css/frontend.css');
	} 

	// Website Scripts
	function theme_scripts() {
		wp_enqueue_script( 'jquery', get_template_directory_uri() . '/dist/bower_components/jquery/dist/jquery.min.js');
		wp_enqueue_script( 'mainjs', get_template_directory_uri() . '/dist/js/frontend.js');
	}
