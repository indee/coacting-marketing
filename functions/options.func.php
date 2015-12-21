<?php 
	//register settings
	function js_options_add(){
		register_setting( 'js_settings', 'js_settings' );
	}
	add_action( 'admin_init', 'js_options_add' );

	//add settings page to menu
	function add_options() {
		add_menu_page( __( 'Theme Settings' ), __( 'Theme Settings' ), 'manage_options', 'settings', 'js_options_page');
	}
	add_action( 'admin_menu', 'add_options' );

	// Custom fucntion for the options values

	function get_options_value($option){
		$options = get_option( 'js_settings' );
		$input = $options[$option];
		if (!empty($input)) {
			echo $input;
		}
	}

	//start settings page
	function js_options_page() {
		?>
		<h2>Theme Options</h2>
		<p>
			This area we can pull specific options into the
			theme such as social links and other pieces of unique
			singular data.
		</p>
		<p>
			In your theme you can call these pieces of data using
			the get_options_value() function passing the input/textarea name
			as the discriminating argument.
		</p>
		<p>
			For example a call for the a textarea with the name "test":
		</p>
		<code>
			get_options_value("test");
		</code>
		<div>
		<hr>
		<form method="post" action="options.php">
			<h2>Example Options</h2>
			<?php settings_fields( 'js_settings' ); ?>
			<table>
				<tr valign="top">
					<td scope="row"><?php _e( 'Add something below..' ); ?></td>
				</tr>
				<tr valign="top">
					<td>
						<textarea name="js_settings[test]" rows="5" cols="36"></textarea></td>
					</tr>
				</table>
				<p><input class="button-primary button" name="submit" id="submit" value="Save Changes" type="submit"></p>
			</form>
		</div>
		<!-- END wrap -->
		<?php
		get_options_value("test");
	}
?>
