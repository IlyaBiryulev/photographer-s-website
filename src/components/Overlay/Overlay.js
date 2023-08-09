import "./Overlay.css";

function Overlay({ isOpen, ...props }) {
  return (
    <div className={`overlay ${isOpen ? 'overlay_active' : ''}`}>
      {props.children}
    </div>
  );
}

export default Overlay;
