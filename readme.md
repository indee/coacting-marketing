Built with ![Alt Text](http://img-cache.cdn.gaiaonline.com/36f426e214c347d0d23f9ee897a3fcf1/http://i89.photobucket.com/albums/k239/bjf092/TinyBlackHeart.gif "logo") by [Jonjoe Whitfield](http://jonjoe.io)

# [Indee](http://indee.io)'s Wordpress Gulp Workflow

#### Contents
- What Is It?
- System Requirments
- How Do I Use It?
- Software Stack
- Features
- Provided Libraries
- Todo

#### What Is It?
Taskrunner for wordpress development.

#### System Requirments

All you need is a [modern browser](http://www.google.com/intl/en_uk/chrome/browser/) a terminal window and [NodeJS](http://nodejs.org/) installed. You will also need ruby and the sass and compass gems.

#### How Do I Use It?

All you need to do is run the init.sh. This will remove the git repo and initialise a new one, install node components, download dependencies and compile app/ into dist/.

```
sh init.sh
```

After this to start the watcher run 

```
gulp
```

#### Software Stack

Split into two sections. The front end prototype and the wordpress development. Prototyping is performed in _prototyping in the root of the project.

* **_prototyping**
    - See Readme for *./_prototype*

* **Wordpress Development**
    - Stylus(Nib)
    - Image Crunching
    - JavaScript

#### Features
- Style compression
- Script compression
- Script concatinations
- SASS Error Catching (Gulp wont crash on error)
- Audio alerting on error
- All tasks running in harmony from default command
- Live compiling from default command
- Style auto prefixing

#### Provided Libraries:
- [jQuery](http://jquery.com/)
- [Mondernizr](http://modernizr.com/)
- [Bootstrap](http://getbootstrap.com/)
- [OwlCarousel 2](http://www.owlcarousel.owlgraphic.com/)
- [HolderJS](http://imsky.github.io/holder/)
- [Font Awesome ... Ofcourse!](http://fortawesome.github.io/Font-Awesome/)
- [Animate CSS](http://daneden.github.io/animate.css/)

#### Default Plugins
- Custom Post Type UI
- Advanced Custom Post Types
- Really Simple Twitter Feed 
- WP Easy Backup
- WP Markdown
- WP Mail SMTP
- Reorder Posts With Categories


Built with ![Alt Text](http://img-cache.cdn.gaiaonline.com/36f426e214c347d0d23f9ee897a3fcf1/http://i89.photobucket.com/albums/k239/bjf092/TinyBlackHeart.gif "logo") by [Jonjoe Whitfield](http://jonjoe.io)
