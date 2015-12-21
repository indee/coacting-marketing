<?php
	/*
		Template Name: Down Time Template
	*/


	// Get the header content
	get_header();
	// Set Contect to pass into the view
	$ctx = Timber::get_context();
	// Add to the array
	$ctx["post"] = Timber::get_post();
	$ctx["theme"] = $themeGlobals;
	// Render a view
	Timber::render('down.twig', $ctx);
	// Get the footer content
	get_footer();

