/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {AuthPage, AuthenticateStack} from './app/modules/login/auth';
import App1 from './app/study/navigation';
import AppButton from './app/study/button';
import Loader from './app/study/loader';
import Popup from './app/study/popup';
import {AppRedux} from './app/study/redux';
import {Provider} from 'react-redux';
import AppStoreage from './app/study/storeage';
import AppAxios from './app/study/axios';
import {NavigationScreen} from './app/modules/home/navigation';
import {Filter} from './app/modules/home/filter';
import {SignUpVerify} from './app/modules/login/sign_up_verify';
import { store } from './app/shared/redux/store';

AppRegistry.registerComponent(appName, () => Popup);
