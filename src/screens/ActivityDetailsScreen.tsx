import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'
import tw from 'twrnc'
import { RootStackParamList } from './types/root'
import { useAddToFavorites } from '../api/useAddToFavorites'

type ActivityDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'ActivityDetails'
>

const ActivityDetailsScreen = () => {
  const { params } = useRoute<ActivityDetailsScreenRouteProp>()
  const activity = params.activity

  const { toggleFavorite, isFavorite, isPending } = useAddToFavorites()

  const handleToggleFavorite = () => {
    toggleFavorite({ id: activity.id })
  }

  return (
    <View style={tw`flex-1 bg-white`}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <Image
          source={{ uri: activity.photoUrl }}
          style={tw`w-full h-[450px] rounded-b-[20px]`}
          resizeMode="cover"
        />

        <View style={tw`px-5 mt-5 gap-5`}>
          <Text style={[tw`text-2xl`, { fontFamily: 'Abel' }]}>
            {activity.name}
          </Text>
          <Text style={[tw`text-base`, { fontFamily: 'Abel' }]}>
            {activity.location}
          </Text>

          <View style={tw`flex-row items-center justify-between`}>
            <Text style={[tw`text-xl`, { fontFamily: 'Abel' }]}>
              ${activity.price}
            </Text>
            <Text style={[tw`text-xs text-gray-400`, { fontFamily: 'Abel' }]}>
              Included taxes and fees
            </Text>
          </View>

          <View style={tw`border-b border-gray-200`} />

          <Text style={[tw`text-base`, { fontFamily: 'Abel' }]}>
            Description
          </Text>
          <Text style={tw`text-sm text-gray-500`}>{activity.description}</Text>

          <View style={tw`border-b border-gray-200`} />
        </View>
      </ScrollView>

      <View style={tw`absolute bottom-0 left-0 right-0 p-4 bg-white`}>
        <TouchableOpacity
          onPress={handleToggleFavorite}
          disabled={isPending}
          style={tw.style(
            'py-5 px-[22px] rounded-[800px]',
            isFavorite(activity.id) ? 'bg-gray-400' : 'bg-black',
            isPending && 'opacity-50',
          )}
        >
          <Text
            style={[
              tw`text-base text-white text-center`,
              { fontFamily: 'Abel' },
            ]}
          >
            {isPending
              ? 'Loading...'
              : isFavorite(activity.id)
                ? 'Added to Favorites'
                : 'Add to Favorites'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ActivityDetailsScreen
