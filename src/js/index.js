import '../css/style.css';
import json from '../assets/json.json';
import png from '../assets/armenia.png';

import {Post} from "./modules/post";
import {createAnalytics} from "./modules/analytics";

const post = new Post('Webpack title');
console.log(post.toString(), 'hi');

window.analytics = createAnalytics();

console.log('json', json);
console.log('png', png);
