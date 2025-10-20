import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Activity } from '../api/apiTypes'
import Location from '/assets/svg/Location.svg'
import Star from '/assets/svg/Star.svg'
import tw from 'twrnc'

interface ActivityCardProps {
  activity: Activity
  onPress: (activity: Activity) => void
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, onPress }) => {
  const imageUrl =
    activity.photoUrl || 'https://placehold.co/300x150/e0e0e0/555?text=ACTIVITY'

  return (
    <TouchableOpacity style={tw`w-full`} onPress={() => onPress(activity)}>
      <Image
        source={{ uri: imageUrl }}
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
