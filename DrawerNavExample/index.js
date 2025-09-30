/**
 * @format
 */

import {AppRegistry} from 'react-native';
// Ensure legacy Reanimated APIs are available before loading the app
import './reanimated-compat';
// Gesture handler must be imported at the top level before other imports
// to properly initialize native gesture handler on Android.
import 'react-native-gesture-handler';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
