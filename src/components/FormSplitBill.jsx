import { useState } from "react"

export default function FormSplitBill({onSplitBillSubmit,friend}){
    const [billValue,setBillValue]=useState()
    const [myExpense,setMyExpense]=useState()
    const[firndExpense,setFriendExpense]=useState(0)
    const [person,setPerson]=useState("user")

    function calculate(x){
        let result=billValue-x
        setFriendExpense(result)

    }
    function onSubmitHandle(e){
        e.preventDefault()
        onSplitBillSubmit(person=="user"?firndExpense:-firndExpense)
    }
    return (
        <form className="form-split-bill" action="" onSubmit={onSubmitHandle}>
              <h2>Split A BILL WITH {friend.name}</h2>
              <label htmlFor="">Bill value</label>
              <input type="text" onChange={(e)=>setBillValue(e.target.value)} />
              <label htmlFor="">Your expense</label>
              <input type="text" onChange={(e)=>calculate(e.target.value)}  />
              <label htmlFor="">{friend.name} expense</label>
              <input type="text" disabled value={firndExpense} />
              <label htmlFor="">Who is paying the bill</label>
              <select name="person" id="" onChange={(e)=>setPerson(e.target.value)}>
                <option value="user">user</option>
                <option value={friend.id}>{friend.name}</option>
              </select>
              <button className="button">Split bill</button>
           </form>
    )
}