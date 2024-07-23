export default function splitBill({ naame }) {
  return (
    <>
      <h2>SPLIT A BILL WITH {naame}</h2>
      <label for="bill">💲 Bill value</label>
      <input type="text" id="bill" />
      <label for="your">⛹️‍♂️ Your expense</label>
      <input type="text" id="your" />
      <label for="them">👩‍👦 {naame}'s expense</label>
      <input type="text" id="them" />
      <label for="who">🤮 Who is paying the bill</label>
      <select id="who">
        <option>You</option>
        <option>{naame}</option>
      </select>
      <button className="button">Split bill</button>
    </>
  );
}
