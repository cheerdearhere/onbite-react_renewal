import {useRef, useState} from "react";

const Register_ref= ()=>{
    const [user, setUser] = useState({
        name:"",
        birth:"",
        nation:"",
        introducingText:"",
    });
    const nationList = ["한국","미국","영국"];
    const [userDataKeys,setUserDataKeys] = useState(Object.keys(user));
    //useRef 사용
    const nameInputRef = useRef();
    const onSubmit=()=>{
        //for(let obj in user)...
        if(user.name===""||user?.name.trim()==="")
            nameInputRef.current.focus();
    }

    const refConsist = useRef(0);
    let varConsist = 0;

    const onChangeUser=e=>{
        const originSetSize = userDataKeys.length;
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]:value,
        });
        if(originSetSize!==Object.keys(user).length)
            setUserDataKeys(Object.keys(user));
    };

    return (
        <div>
            <div>
                <input
                    name="name"
                    placeholder="name"
                    onChange={onChangeUser}
                    value={user.name}
                    ref={nameInputRef}//ref로 지정
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
                    {nationList.map(nationOpt => {
                        return <option key={nationOpt + 1}>{nationOpt}</option>
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
            <button
                onClick={onSubmit}
            >
                submit
            </button>
        </div>
    )
}
export default Register_ref;