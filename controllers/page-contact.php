<?php
	/*
		Template Name: Contact Template
	*/


	// Get the header content
	get_header();
	// Set Contect to pass into the view
	$ctx = Timber::get_context();
	// Add to the array
	$ctx["post"] = Timber::get_post();
	$ctx["theme"] = $themeGlobals;
	// Render a view
	Timber::render('contact.twig', $ctx);
	// Get the footer content
	get_footer();
