import './App.css'
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import NotFound from "./pages/NotFound.jsx";
import {getEmotionImage} from "./util/emotionImage.js";

function App() {
    const navigate = useNavigate();
    const onClickNewBtn=()=>{
        navigate("/new");
    }
    return (
        <>
            <div>
                <img src={getEmotionImage(1)} alt="very happy"/>
                <img src={getEmotionImage(2)} alt="happy"/>
                <img src={getEmotionImage(3)} alt="soso"/>
                <img src={getEmotionImage(4)} alt="unhappy"/>
                <img src={getEmotionImage(5)} alt="bad"/>
            </div>
            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/new"}>New</Link>
                <Link to={"/diary"}>Diary</Link>
            </div>
            <button onClick={onClickNewBtn}>go to New page</button>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/new" element={<New/>}></Route>
                <Route path="/diary/:id" element={<Diary/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </>
    )
}

export default App
