import "../assets/css/Header.css";
const Header = ()=>{
    return (
        <div className={"headerContainer"}>
            <h3>오늘은 📆</h3>
            <h1>{
                new Date().toLocaleDateString(
                    "ko",
                    {
                        weekday:"long",
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    }
                )
            }</h1>
        </div>
    );
}
export default Header;