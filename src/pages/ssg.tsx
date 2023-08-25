import { getRandomDog } from "./api/fetchRandomDog"
import Dog from "./components/Dog"

export async function getStaticProps() {
    const data = await getRandomDog()
    
    return { props: { data } }
}
type Props = {
    data: string
}
const SSG = ({ data }: Props) => {
    return <Dog data={data} />
}

export default SSG