import Image from 'next/image'
type Props = {
    data: string
}
const Dog = ({data} : Props) => {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <img src={data} alt={data}  width={200} height={200} />
            <div>{data}</div>
        </div>
    )
}

export default Dog