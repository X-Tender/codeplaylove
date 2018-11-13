import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import feeds from './feeds';
import menu from './menu';
import skills from './skills';
import tools from './tools';
import introduction from './introduction';
import cards from './cards';
import about from './about';
import detailedIntroduction from './detailedIntroduction';
import games from './games';
import imprint from './imprint';
import credits from './credits';
import privacy from './privacy';
import socialLinks from './socialLinks';

export default combineReducers({
	routing: routerReducer,
	feeds,
	menu,
	skills,
	tools,
	introduction,
	cards,
	about,
	detailedIntroduction,
	games,
	imprint,
	credits,
	privacy,
	socialLinks,
});
