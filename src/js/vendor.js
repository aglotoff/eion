import focusTrap from 'focus-trap';
import jQuery from 'jquery';
import svg4everybody from 'svg4everybody';

import 'slick-carousel';

// Expose libraries to global Window object
window.$ = window.jQuery = jQuery;
window.focusTrap = focusTrap;


// Manually initialize third-party libraries
svg4everybody();
require('owl.carousel');