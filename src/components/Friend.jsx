export default function Friend({img,name,balance,onSelect}){
    function handleOnSelect(name){
        onSelect(name)
    }
    return (
        <li>
            <img src={img} alt="" />
            <h3>{name}</h3>
            {balance > 0 && (<p className="red">{balance}</p>)}
            {balance < 0 && (<p className="green">{balance}</p>)}
            {balance == 0 && (<p> You and {name} are even</p>)}
            <button className="button" onClick={()=>handleOnSelect(name)}>select</button>
        </li>
    )
}