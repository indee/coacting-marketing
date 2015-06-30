<aside class="col-md-4 sidebar">
  <section class="clearfix">
    <h2>Search</h2>
    <form method="get" id="searchform" action="<?php bloginfo('home'); ?>/">
      <div class="form-group">
        <input class="form-control" type="text" size="18" value="<?php echo wp_specialchars($s, 1); ?>" name="s" id="s" placeholder="Search Here"/>
      </div>
    </form>
  </section>
  <section class="clearfix">
    <h2>Categories</h2>
    <ul class="categories">
      <?php $args = array(
        'show_option_all'    => '',
        'orderby'            => 'name',
        'order'              => 'ASC',
        'style'              => 'list',
        'show_count'         => 0,
        'hide_empty'         => 1,
        'use_desc_for_title' => 1,
        'child_of'           => 0,
        'feed'               => '',
        'feed_type'          => '',
        'feed_image'         => '',
        'exclude'            => '',
        'exclude_tree'       => '',
        'include'            => '',
        'hierarchical'       => 1,
        'title_li'           => 0,
        'show_option_none'   => __( 'No categories' ),
        'number'             => null,
        'echo'               => 1,
        'depth'              => 0,
        'current_category'   => 0,
        'pad_counts'         => 0,
        'taxonomy'           => 'category',
        'walker'             => null
      ); ?>
      <?php wp_list_categories( $args ); ?>
    </ul>
  </section>
</aside>
