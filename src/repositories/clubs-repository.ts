import { ClubModel } from '../models/club-model'
import fs from 'fs/promises'

export const findAllClubs = async (): Promise<ClubModel[]> => {
  const data = await fs.readFile('src/data/clubs.json', 'utf-8')
  const clubs: ClubModel[] = JSON.parse(data)
  return new Promise((resolve) => {
      setTimeout(() => {
        resolve(clubs)
      }, 1000)
    })
}
