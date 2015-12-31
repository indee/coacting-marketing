<!--
	.___            .___
	|   | ____    __| _/____   ____
	|   |/    \  / __ |/ __ \_/ __ \
	|   |   |  \/ /_/ \  ___/\  ___/
	|___|___|  /\____ |\___  >\___  >
	         \/      \/    \/     \/
	------- Creative Disruption ------

	http://indee.io
	@weareindee

	<3

-->


<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
<!--<![endif]-->
	<head>
		<meta charset="utf-8"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
		<meta name="description" content=""/>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>

		<title><?php title() ?></title>

		<?php wp_head(); ?>
	</head>

	<?php // Take Page title and replace spaces with _'s ?>
	<?php $class = str_replace(' ', '_', get_the_title());?>
	<?php // give the body a class that = the page name ?>
	<body class="<?php echo $class ?>">
