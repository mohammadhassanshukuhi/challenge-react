function Friends({ image, name, balance }) {
    return (
      <li>
                <img src={image} alt={name} />
                <h3>{name}</h3>
                <p>{balance}</p>
                <button className="button">Select</button>
              </li>
    );
  }
  export default Friends;