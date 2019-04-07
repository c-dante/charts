import './index.css';

import tpl from './index.pug';

const app = document.createElement('div');
app.innerHTML = tpl();
document.body.appendChild(app);

// Bind in examples
import barExample from './example/bar-example';
barExample(app.querySelector('#bar-example .chart'));
