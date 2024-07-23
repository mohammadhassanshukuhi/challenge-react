function Friends({ image, name, balance }) {
  return (
    <>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{balance}</p>
    </>
  );
}
export default Friends;
