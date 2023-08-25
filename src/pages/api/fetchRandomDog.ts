import axios from 'axios'
const API_PATH = 'https://dog.ceo/api/breeds/image/random'

export const getRandomDog = async (): Promise<string> => {
    const buffer = (await axios.get(API_PATH)).data
    const url: string = buffer['message']
    await new Promise(resolve => setTimeout(() => resolve(1), 3000))
    return url
}
