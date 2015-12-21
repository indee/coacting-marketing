<?php
	add_action( 'after_setup_theme', 'wpt_setup' );
	if ( ! function_exists( 'wpt_setup' ) ):
		function wpt_setup() {
			register_nav_menu( 'primary', __( 'Primary navigation', 'wptuts' ) );
		}
	endif;
?>
