import {useState} from "react";

const Bulb = ()=>{
    const [light, setLight] = useState("OFF");
    console.log(light);
    return (
        <div>
            <h1>system: {light}</h1>
            light === "ON"
            ? <h1 style={{background: "orange"}}>ON lamp</h1>
            : <h1 style={{background: "gray"}}>OFF...</h1>
            <button
                onClick={() => {
                    setLight(light === "ON" ? "OFF" : "ON");
                }}
                style={{
                    background: light === "ON" ? "#fff" : "#000",
                    color: light === "ON" ? "#000" : "#FFF"
                }}
            >
                {light === "ON" ? "켜기" : "끄기"}
            </button>
        </div>
    )
}
export default Bulb;