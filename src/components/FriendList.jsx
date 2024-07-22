export default function FriendList() {
  return (
    <form className="form-add-friend">
      <label for="name">🕺Friend name</label>
      <input type="text" id="name" />
      <label for="name">🖼️Image URL</label>
      <input type="text" id="name" />
      <button className="button">Add</button>
    </form>
  );
}
