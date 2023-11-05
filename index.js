/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {AuthPage, AuthenticateStack} from './app/modules/login/auth';
import App1 from './app/common/navigation';
import AppButton from './app/common/button';
import Loader from './app/common/loader';
import Popup from './app/common/popup';
import {AppRedux} from './app/common/redux';
import {Provider} from 'react-redux';
import AppStoreage from './app/common/storeage';
import AppAxios from './app/common/axios';
import {NavigationScreen} from './app/modules/home/navigation';
import {Filter} from './app/modules/home/filter';
import {SignUpVerify} from './app/modules/login/sign_up_verify';
import { store } from './app/shared/redux/store';

AppRegistry.registerComponent(appName, () => AuthPage);
