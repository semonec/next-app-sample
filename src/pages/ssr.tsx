import { getRandomDog } from "./api/fetchRandomDog"
import Dog from "./components/Dog"

export async function getServerSideProps() {
    const data = await getRandomDog()
    
    return { props: { data } }
}
type Props = {
    data: string
}
const SSR = ({ data }: Props) => {
    return <Dog data={data} />
}

export default SSR