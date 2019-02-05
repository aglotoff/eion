import focusTrap from 'focus-trap';
import jQuery from 'jquery';
import svg4everybody from 'svg4everybody';
import Swiper from 'swiper';

import 'jquery-countdown';
import 'jquery.scrollbar';
import 'jquery-validation';
import 'magnific-popup';
import 'slick-carousel';

// Expose libraries to global Window object
window.$ = window.jQuery = jQuery;
window.focusTrap = focusTrap;
window.Swiper = Swiper;

// Manually initialize third-party libraries
svg4everybody();
require('owl.carousel');