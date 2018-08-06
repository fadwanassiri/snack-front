interface Location {
  address: string
  zipCode: string
  latitude: number
  longitude: number
}

export interface Place {
  _id: number
  name: string
  location: Location
}