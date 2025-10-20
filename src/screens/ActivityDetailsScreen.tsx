import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { RootStackParamList } from './types/root'
import { useState } from 'react'
import tw from 'twrnc'
import { BackButton } from '../components/BackButton'
import { StackNavigationProp } from '@react-navigation/stack'

type ActivityDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'ActivityDetails'
>

const ActivityDetailsScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const { params } = useRoute<ActivityDetailsScreenRouteProp>()
  const [isFavorite, setIsFavorite] = useState(false)

  const handleAddToFavorites = () => {
    setIsFavorite(prev => !prev)
  }

  return (
    <View style={tw`flex-1 bg-white`}>
      <BackButton navigation={navigation} />

      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <Image
          source={{ uri: params.activity.photoUrl }}
          style={tw`w-full h-[450px] rounded-b-[20px]`}
          resizeMode="cover"
        />

        <View style={tw`px-5 mt-4 gap-5 `}>
          <Text style={[tw`text-2xl`, { fontFamily: 'Abel' }]}>
            {params.activity.name}
          </Text>
          <Text style={[tw`text-base`, { fontFamily: 'Abel' }]}>
            {params.activity.location}
          </Text>

          <View style={tw`flex-row items-center justify-between `}>
            <Text style={[tw`text-xl`, { fontFamily: 'Abel' }]}>
              ${params.activity.price}
            </Text>
            <Text style={[tw`text-xs text-gray-400`, { fontFamily: 'Abel' }]}>
              Included taxes and fees
            </Text>
          </View>

          <View style={tw`border-b border-gray-200`} />

          <Text style={[tw`text-base`, { fontFamily: 'Abel' }]}>
            Description
          </Text>
          <Text style={tw`text-sm text-gray-500`}>
            {params.activity.description}
          </Text>

          <View style={tw`border-b border-gray-200`} />
        </View>
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: 16,
          backgroundColor: 'white',
        }}
      >
        <TouchableOpacity
          onPress={handleAddToFavorites}
          style={tw`py-5 px-[22px] rounded-[800px] ${isFavorite ? 'bg-gray-400' : 'bg-black'}`}
        >
          <Text
            style={[
              tw`text-base text-white text-center`,
              { fontFamily: 'Abel' },
            ]}
          >
            {isFavorite ? 'Added to Favorites' : 'Add to Favorites'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ActivityDetailsScreen
