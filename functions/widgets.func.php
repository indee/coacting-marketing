<?php
	//Generate Widgets
	function create_widget($name, $id, $description){
		$args = array(
			'name' => $name,
			'id' => $id,
			'description'=>$description,
			'before_widget' => "",
			'after_widget' => "",
			'before_title' => '<h2>',
			'after_title' => '</h2>',
		);
		register_sidebar($args);
	};
	create_widget('Bottom Right', 'bottom-right', 'This is the bottom right widget area.');
?>
