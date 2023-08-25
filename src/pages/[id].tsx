import { getBreedDog } from "./api/fetchBreedDog";
import Dog from "./components/Dog";

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: 'akita'} },
            { params: { id: 'hound' } },
        ],
        fallback: 'blocking',
  }
}

type ParamType = {
    params: {
        id: string
    }
}
export async function getStaticProps({ params }: ParamType) {
    // get all the data needed for rendering the page
    const data = await getBreedDog(params.id);
    return {
        props: { data },
    };
}

type Props ={
    data: string
}

const SSGwithId = ({ data }: Props) => {
    return <Dog data={data} />
}

export default SSGwithId