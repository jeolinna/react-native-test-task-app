import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from './types/root'
import ActivityCard from '../components/ActivityCard'
import tw from 'twrnc'
import { useGetActivitiesQuery } from '../api/activities'
import Loader from '../components/Loader'
import Error from '../components/Error'
import { Activity } from '../api/apiTypes'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native-gesture-handler'

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>

const keyExtractor = (activity: Activity) => activity.id.toString()

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>()
  const { data: activities, isLoading, isError } = useGetActivitiesQuery()

  const handleActivityPress = (activity: Activity) => {
    navigation.navigate('ActivityDetails', { activity })
  }

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <Error />
  }

  return (
    <SafeAreaView style={tw`flex-1 bg-white`} edges={['top']}>
      <View style={tw`flex-1 p-4`}>
        <Text
          style={[
            tw`text-base text-center mt-4 mb-9 text-black`,
            { fontFamily: 'Abel' },
          ]}
        >
          Activities
        </Text>
        <FlatList
          data={activities}
          keyExtractor={keyExtractor}
          renderItem={({ item }) => (
            <ActivityCard activity={item} onPress={handleActivityPress} />
          )}
          contentContainerStyle={{ gap: 10, paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
