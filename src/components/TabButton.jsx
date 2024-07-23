function TabButton({ children, onSelect }) {
  function handleClick() {
    onSelect();
  }

  return (
    <button className="button" onClick={handleClick}>
      {children}
    </button>
  );
}
export default TabButton;