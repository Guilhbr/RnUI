import {combineReducers} from 'redux';
import posts from './posts';
import user from './user';
import post from './post';
import photos from './photos';

export default combineReducers({posts, user, post, photos});
