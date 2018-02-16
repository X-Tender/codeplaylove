import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import grid from './grid';
import menu from './menu';
import skills from './skills';
import gears from './gears';
import tools from './tools';

export default combineReducers({
	routing: routerReducer,
	grid,
	menu,
	skills,
	gears,
	tools,
});
