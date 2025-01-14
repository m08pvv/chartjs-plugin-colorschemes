'use strict';

import {Chart} from 'chart.js';
import {color} from 'chart.js/helpers'
import colorschemes from './colorschemes/index';
import ColorSchemesPlugin from './plugins/plugin.colorschemes';

Chart.colorschemes = colorschemes;

export default ColorSchemesPlugin;
