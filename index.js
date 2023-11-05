/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {AuthPage, Login} from './app/modules/login/login';
import App1 from './app/common/navigation';
import AppButton from './app/common/button';
import Loader from './app/common/loader';
import Popup from './app/common/popup';
import {AppRedux} from './app/common/redux';
import {Provider} from 'react-redux';
import AppStoreage from './app/common/storeage';
import AppAxios from './app/common/axios';
import {NavigationScreen} from './app/modules/staffs/navigation';
import {Filter} from './app/modules/staffs/filter';
import {SignUpVerify} from './app/modules/login/sign_up_verify';
import { store } from './app/shared/redux/store';

AppRegistry.registerComponent(appName, () => AuthPage);
