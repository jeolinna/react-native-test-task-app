import { StackScreenProps } from '@react-navigation/stack'
import { Activity } from 'api/apiTypes'

export type RootStackParamList = {
  Home: undefined
  ActivityDetails: { activity: Activity }
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>
