export interface Main_charactor {
  id: number
  name: string
}

export interface People {
  main_charactor: Main_charactor[]
}

export interface Pingback {
  doc_id: number
}

export interface RootObject {
  tvId: number
  albumId: number
  channelId: number
  description: string
  name: string
  playUrl: string
  isAdvance: boolean
  payMark: number
  payMarkUrl: string
  imageUrl: string
  duration: string
  videoCount: number
  latestOrder: number
  categories: string[]
  albumName: string
  albumImageUrl: string
  period: string
  exclusive: boolean
  qiyiProduced: boolean
  sourceId: number
  focus: string
  people: People
  score: number
  imageSize: string[]
  imageProductionType: string[]
  title: string
  pingback: Pingback
}
