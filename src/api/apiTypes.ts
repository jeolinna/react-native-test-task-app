export interface Activity {
  id?: number
  photoUrl?: string
  name?: string
  description?: string
  location?: string
  price?: number
  rating?: number
}

export interface FavoritePayload {
  id: number
}

export interface FavoriteResponse {
  message?: string
}
