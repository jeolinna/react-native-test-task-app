/**
 * @format
 */

import 'react-native-gesture-handler'
import { AppRegistry } from 'react-native'
import App from './App'
import { name as test_app } from './app.json'

console.log('Registering app:', test_app)
AppRegistry.registerComponent(test_app, () => App)
