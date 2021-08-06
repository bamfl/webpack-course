import $ from 'jquery';
import '../scss/style.scss';

import {Post} from "./modules/post";
import {createAnalytics} from "./modules/analytics";
import {start} from '../js/modules/babel';
import {Util} from '../js/modules/babel';

const post = new Post('Webpack title');
console.log(post.toString(), 'hi');

window.analytics = createAnalytics();

console.log('jQuery', $('.logo'));
$('.logo').addClass('code10');

start().then((data) => console.log(data));
console.log(Util.id);
