import axios from 'axios'
const API_PATH = 'https://dog.ceo/api/breed/'

export const getBreedDog = async (breed: string): Promise<string> => {
    const buffer = (await axios.get(`${API_PATH}${breed}/images`)).data
    const url: string = (buffer['message'] as Array<string>).at(0) ?? ''
    await new Promise(resolve => setTimeout(() => resolve(1), 3000))
    return url
}
