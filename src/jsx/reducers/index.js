import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import grid from './grid';
import menu from './menu';
import skills from './skills';
import gears from './gears';
import tools from './tools';
import introduction from './introduction';
import cards from './cards';
import about from './about';
import detailedIntroduction from './detailedIntroduction';

export default combineReducers({
	routing: routerReducer,
	grid,
	menu,
	skills,
	gears,
	tools,
	introduction,
	cards,
	about,
	detailedIntroduction,
});
