export interface Camera {
  id: string
  name: string
  type: string
  isNew: boolean
  position: {
    x: number
    y: number
  }
  coverage: number
}

export interface House {
  id: string
  name: string
  image: string
  floorPlan: string
  address?: string
  currentCameras: Camera[]
  newCameras: Camera[]
}
