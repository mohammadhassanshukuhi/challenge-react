import { useState } from "react"
import Friends from "./components/Friends";
import {initialFriends} from "./App"
import AddFriendFrom from "./components/AddFriendFrom"
import FormSplitBill from "./components/FormSplitBill";

function App() {
const [friends,setFriends]=useState(initialFriends)  
const [friendForm,setFriendFrom]=useState(false);
const [splitBillForm,setsplitForm]=useState(false)
const[friendSelected,setfriendSelected]=useState();

function handleOnAddFriendClick(){
  setFriendFrom((prevState)=>!prevState)
}

function handleAddFriend(friend){
  setFriends([...friends,friend])
}

function handleFriendSelected(friend){
  setfriendSelected(friend)
  setsplitForm(true)

}

function handleSplitBillSubmit(value){
  setFriends(friends.map((friend)=>(friend.id==friendSelected.id ? {...friend,balance:friend.balance + value} : friend)))

  setsplitForm(false)
}

  return (
    <>
      <div className="app">
           <ol className="sidebar">
              <ul>
                <Friends friends={friends} onfriendSelect={handleFriendSelected}/>
              </ul>        
                 <> {friendForm ? <AddFriendFrom onAddSubmit={handleAddFriend} /> :""} </>
              <button className="button" onClick={handleOnAddFriendClick}>{friendForm ? "close" :"Add Friend"} </button>
           </ol>
              <>{splitBillForm ? <FormSplitBill onSplitBillSubmit={handleSplitBillSubmit} friend={friendSelected} /> :""} </>
      </div>
    </>
  )
}

export default App
