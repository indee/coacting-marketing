<?php
	/*
		Template Name: About Us Template
	*/


	// Get the header content
	get_header();
	// Set Contect to pass into the view
	$ctx = Timber::get_context();
	// Add to the array
  $ctx["post"] = Timber::get_post();
  $ctx["theme"] = $themeGlobals;
	// Render a view
	Timber::render('about-us.twig', $ctx);
	// Get the footer content
	get_footer();

