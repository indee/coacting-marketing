<?php
	// Generates Title
	function title() {
		if ( is_category() ) {
			echo 'Category Archive for &quot;'; single_cat_title(); echo '&quot; | '; bloginfo( 'name' );
		} elseif ( is_tag() ) {
			echo 'Tag Archive for &quot;'; single_tag_title(); echo '&quot; | '; bloginfo( 'name' );
		} elseif ( is_archive() ) {
			wp_title(''); echo ' Archive | '; bloginfo( 'name' );
		} elseif ( is_search() ) {
			echo 'Search for &quot;'.wp_specialchars($s).'&quot; | '; bloginfo( 'name' );
		} elseif ( is_home() || is_front_page() ) {
			bloginfo( 'name' ); echo ' | '; bloginfo( 'description' );
		}  elseif ( is_404() ) {
			echo 'Error 404 Not Found | '; bloginfo( 'name' );
		} elseif ( is_single() ) {
			wp_title('');
		} else {
			echo wp_title( ' | ', false, right ); bloginfo( 'name' );
		}
		
	}

	function add_to_context($data){
		/* So here you are adding data to Timber's context object, i.e... */
		$data['foo'] = 'I am some other typical value set in your functions.php file, unrelated to the menu';

		/* Now, in similar fashion, you add a Timber menu and send it along to the context. */
		$data['menu'] = new TimberMenu(); // This is where you can also send a Wordpress menu slug or ID
		return $data;
	}
