import {useState} from "react";

const Register= ()=>{
    const [name, setName] = useState("");
    const [birth, setBirth] = useState("");
    const [nation, setNation] = useState("");
    const [introducingText, setIntroducingText] = useState("");

    const nationList = ["한국","미국","영국"];

    const onChangeName=e=>setName(e.target.value);
    const onChangeBirth=e=>setBirth(e.target.value);
    const onChangeNation=e=>{
        setNation(e.target.value);
    };
    const onChangeIntroducingText=e=>setIntroducingText(e.target.value);

    return (
        <div>
            <div>
                <input placeholder="name" onChange={onChangeName} value={name}/>
                <br/>
                {name}
            </div>
            <div>
                <input
                    type={"date"}
                    value={birth}
                    onChange={onChangeBirth}
                />
                <br/> {birth}
            </div>
            <div>
                <select
                    value={nation}
                    onChange={onChangeNation}
                >
                    <option value="">선택</option>
                    {nationList.map(nationOpt=>{
                        return <option key={nationOpt+1}>{nationOpt}</option>
                    })}
                </select>
                <br/>{nation}
            </div>
            <div>
                <textarea
                    value={introducingText}
                    onChange={onChangeIntroducingText}
                />
                <br/> {introducingText}
            </div>
        </div>
    )
}
export default Register;