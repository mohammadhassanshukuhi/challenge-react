import { useState } from "react"

export default function AddFriendForm({onAddSubmit}){
    const [name,setName]=useState()
    const[image,setImage]=useState("https://i.pravatar.cc/")
    function handleSubmit(e){


        e.preventDefault()
        let randomID=Math.trunc(Math.random() * 48)+1
        const newFriend={
            id:randomID,
            name:`${name}`,
            image:`${image}${randomID}`,
            balance:"0$"
        }
        onAddSubmit(newFriend)

        setName("");
        setImage("https://i.pravatar.cc/")
    
    }
    return (
        
        <form className="form-add-friend" action=""  onSubmit={handleSubmit}>

            <label htmlFor="">Friend Name</label>
            <input type="text" onChange={(e)=>setName(e.target.value)} />
            <label htmlFor="">Image Url</label>
            <input type="text" onChange={(e)=>setImage(e.target.value)} />

            <button className="button">Add</button>
        </form>
    )
}