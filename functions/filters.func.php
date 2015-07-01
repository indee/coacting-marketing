<?php
	add_filter('show_admin_bar', '__return_false');
	add_filter('timber_context', 'add_to_context');
