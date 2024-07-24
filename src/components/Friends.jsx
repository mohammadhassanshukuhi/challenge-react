import Friend from "./Friend";
export default function Friends({friends,onfriendSelect}){
    function onSelect(friend){
        onfriendSelect(friend)
    }
    return (
    <>
    {friends.map((friend)=>(<Friend key={friend.id} name={friend.name} img={friend.image} balance={friend.balance} onSelect={()=>onSelect(friend)}/>))}
    </>      
       
    )
}