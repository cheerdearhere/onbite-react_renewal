import {useSearchParams} from "react-router-dom";

const Home = ()=>{
    const [params, setParams] = useSearchParams();
    console.log(params.get("keyString"));
    return (
        <div>
            Home
        </div>
    )
}
export default Home;