import {useState} from "react";

const Register_re= ()=>{
    const [user, setUser] = useState({
        name:"",
        birth:"",
        nation:"",
        introducingText:"",
    });
    const nationList = ["한국","미국","영국"];

    const onChangeUser=e=>{
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]:value,
        });
    };

    return (
        <div>
            <div>
                <input
                    name="name"
                    placeholder="name"
                    onChange={onChangeUser}
                    value={user.name}
                />
                <br/>
                {user.name}
            </div>
            <div>
                <input
                    name="birth"
                    type={"date"}
                    value={user.birth}
                    onChange={onChangeUser}
                />
                <br/> {user.birth}
            </div>
            <div>
                <select
                    name="birth"
                    value={user.nation}
                    onChange={onChangeUser}
                >
                    <option value="">선택</option>
                    {nationList.map(nationOpt=>{
                        return <option key={nationOpt+1}>{nationOpt}</option>
                    })}
                </select>
                <br/>{user.nation}
            </div>
            <div>
                <textarea
                    name="introducingText"
                    value={user.introducingText}
                    onChange={onChangeUser}
                />
                <br/> {user.introducingText}
            </div>
        </div>
    )
}
export default Register_re;