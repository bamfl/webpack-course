import $ from 'jquery';
import '../css/style.css';

import {Post} from "./modules/post";
import {createAnalytics} from "./modules/analytics";

const post = new Post('Webpack title');
console.log(post.toString(), 'hi');

window.analytics = createAnalytics();

console.log('jQuery', $('.logo'));
$('.logo').addClass('code10');