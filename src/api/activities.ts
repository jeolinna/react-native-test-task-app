import { useQuery } from '@tanstack/react-query'
import { api } from './axios'
import { Activity } from './apiTypes'

const fetchActivities = async (): Promise<Activity[]> => {
  try {
    const response = await api.get<Activity[]>('/activities')
    return response.data
  } catch {
    throw new Error('Failed to fetch activities')
  }
}

export const useGetActivitiesQuery = () => {
  return useQuery({
    queryKey: ['activities'],
    queryFn: fetchActivities,
    staleTime: 5 * 60 * 1000,
  })
}
