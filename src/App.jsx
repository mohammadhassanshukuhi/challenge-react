import React, { useState } from "react";
import Friends from "./components/Friends";
import FriendList from "./components/FriendList";
import SplitBill from "./components/SplitBill";
import TabButton from "./components/TabButton";

function App() {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];

  const [selectedTab, setSelectedTab] = useState();

  // const handelTabSelect = (name) => {
  //   setSelectedTab = (name)
  // }

  return (
    <React.Fragment>
      <main>
        <div className="app">
          <div className="sidebar">
            <ul>
              <li>
                <Friends {...initialFriends[0]} />
                <TabButton onSelect={() => handelTabSelect("name")}>
                  Select
                </TabButton>
              </li>
              <li>
                <Friends {...initialFriends[1]} />
                <TabButton>Select</TabButton>
              </li>
              <li>
                <Friends {...initialFriends[2]} />
                <TabButton>Select</TabButton>
              </li>
            </ul>
            {selectedTab ? <FriendList /> : null}
            <button className="button" onClick={() => setSelectedTab("List")}>
              {selectedTab ? "Close" : "Add Friend"}
            </button>
          </div>
          <form className="form-split-bill">
            <SplitBill />
          </form>
        </div>
      </main>
    </React.Fragment>
  );
}
export default App;
