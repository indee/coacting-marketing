<?php
	/*
		Template Name: Blog Template
	*/


	// Get the header content
	get_header();
	// Set Contect to pass into the view
	$ctx = Timber::get_context();
	// Add to the array
	$ctx["post"] = Timber::get_post();
	// Render a view
	Timber::render('blog.twig', $ctx);
	// Get the footer content
	get_footer();
