import { View, Text } from 'react-native'
import tw from 'twrnc'

const Error = () => {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text>Something went wrong</Text>
    </View>
  )
}

export default Error
