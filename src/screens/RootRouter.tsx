import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import { RootStackParamList } from './types/root'
import ActivityDetailsScreen from './ActivityDetailsScreen'
import { IconButton } from '../components/IconButton'

const Stack = createStackNavigator<RootStackParamList>()

const RootRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        gestureEnabled: true,
        detachPreviousScreen: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ActivityDetails"
        component={ActivityDetailsScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerTransparent: true,
          title: '',
          headerLeft: () => <IconButton navigation={navigation} />,
          headerLeftContainerStyle: { paddingLeft: 16 },
        })}
      />
    </Stack.Navigator>
  )
}

export default RootRouter
