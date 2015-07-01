<?php
	require_once('functions/assets.func.php');
	require_once('functions/widgets.func.php');
	require_once('functions/navigation.func.php');
	require_once('functions/options.func.php');
	require_once('functions/filters.func.php');
	require_once('functions/themeSupport.func.php');
	require_once('functions/actions.func.php');
	require_once('functions/globals.func.php');

	// Timber Vars
	$themeGlobals = array(
		'url' => (string)get_bloginfo('template_directory'),
		'asset' => array(
			'img' => (string)get_bloginfo('template_directory')."/dist/img",
			'css' => (string)get_bloginfo('template_directory')."/dist/css",
			'js' => (string)get_bloginfo('template_directory')."/dist/js"
		)
	);
