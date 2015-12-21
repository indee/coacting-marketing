<?php 
	// Website Styles
	function theme_styles() {
		wp_enqueue_style( 'font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css');
		wp_enqueue_style( 'animate-css', 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.0/animate.css');
		wp_enqueue_style( 'maincss', get_template_directory_uri() . '/dist/css/frontend.css');

	} 

	// Website Scripts
	function theme_scripts() {
		wp_enqueue_script( 'jquery', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min.js');
		wp_enqueue_script( 'mainjs', get_template_directory_uri() . '/dist/js/frontend.js');
	}
