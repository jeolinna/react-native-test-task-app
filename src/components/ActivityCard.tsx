import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Activity } from '../api/apiTypes'
import Location from '/assets/svg/Location.svg'
import Star from '/assets/svg/Star.svg'
import Fire from '/assets/svg/Fire.svg'
import tw from 'twrnc'

interface ActivityCardProps {
  activity: Activity
  onPress: (activity: Activity) => void
  isFavorite?: boolean
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  activity,
  onPress,
  isFavorite = false,
}) => {
  return (
    <TouchableOpacity
      style={tw`w-full relative`}
      onPress={() => onPress(activity)}
    >
      {isFavorite && (
        <View
          style={tw`absolute top-2 left-2 z-10 bg-yellow-400 rounded-full p-[6px]`}
        >
          <Fire width={16} height={16} />
        </View>
      )}
      <Image
        source={{ uri: activity.photoUrl }}
        style={tw`h-[140px] w-full mb-1 rounded-2xl`}
        resizeMode="cover"
      />

      <View
        style={tw`bg-gray-100 rounded-2xl p-5 flex-row justify-between items-center`}
      >
        <View style={tw`h-[45px] flex-col justify-between`}>
          <Text style={[tw`text-base`, { fontFamily: 'Abel' }]}>
            {activity.name}
          </Text>
          <View style={tw`flex-row items-center gap-1`}>
            <Location />
            <Text style={[tw`text-xs`, { fontFamily: 'Abel' }]}>
              {activity.location}
            </Text>
          </View>
        </View>

        <View style={tw`items-end`}>
          <View style={tw`flex-row items-center gap-1 mb-1`}>
            <Star />
            <Text style={[tw`text-xs`, { fontFamily: 'Abel' }]}>
              {activity.rating}
            </Text>
          </View>

          <View style={tw`flex-row items-center`}>
            <Text style={[tw`text-sm`, { fontFamily: 'Abel' }]}>
              ${activity.price}
            </Text>
            <Text
              style={[tw`text-xs text-gray-400 ml-1`, { fontFamily: 'Abel' }]}
            >
              / night
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ActivityCard
