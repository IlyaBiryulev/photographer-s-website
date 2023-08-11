import "./Overlay.css";

function Overlay({ isOpen, onClick, ...props }) {
  return (
    <div className={`overlay ${isOpen ? 'overlay_active' : ''}`}>
      <button className="overlay__cls-btn" onClick={onClick}></button>
      {props.children}
    </div>
  );
}

export default Overlay;
