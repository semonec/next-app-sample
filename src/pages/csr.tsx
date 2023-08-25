import { useEffect, useState } from "react"
import { getRandomDog } from "./api/fetchRandomDog"
import Dog from "./components/Dog"

const CSR = () => {

    const [data, setData] = useState<string>()

    const getData = async () => {
        const url = await getRandomDog()
        setData(url)
    }
    useEffect(() => {
        if (!data) getData()
    }, [data])
    
    return <Dog data={data ?? ''} />
}

export default CSR