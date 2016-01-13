<?php
	/*
		Template Name: Home Template
	*/

	// Get the header content
	get_header();
	// Set Contect to pass into the view
	$ctx = Timber::get_context();
	// Add to the array
  $ctx["post"] = Timber::get_post();
  $ctx["reviews"] = Timber::get_posts("post_type='testimonials'");
  $ctx["theme"] = $themeGlobals;
	// Render a view
	Timber::render('home.twig', $ctx);
	// Get the footer content
	get_footer();
