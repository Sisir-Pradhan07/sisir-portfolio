import { createPortal } from "react-dom";

function MobileProjectModal({
  open,
  onClose,
  title,
  children,
}) {
  if (!open) return null;

  return createPortal(
    <div
      className="mobile-modal-overlay"
      onClick={onClose}
    >
      <div
  className="mobile-modal"
  onClick={(e) => e.stopPropagation()}
  style={{ position: "relative" }}
>
        <button
          className="mobile-modal-close"
          onClick={onClose}
        >
          ✕
        </button>

        <h2>{title}</h2>

        <div className="mobile-modal-content">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}

export default MobileProjectModal;