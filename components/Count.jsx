export default function Count({ like }) 
{
    return (<div className={like >= 0 ? 
    "d-flex align-items-center gap-1" : "d-none"}>
        <img src="/like.svg" width={20}></img>
        <span style={{ color: "#F6FBF5 " }}>
            {like}
            </span>

    </div>);

}