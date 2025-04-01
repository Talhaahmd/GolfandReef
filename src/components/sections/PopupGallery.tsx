import { useEffect } from "react";

export const PopupGallery = ({ isOpen, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0A1A2F] text-white overflow-y-auto px-6 md:px-16 py-12">
      <button
        onClick={onClose}
        className="fixed top-6 right-6 text-white bg-black/30 px-3 py-1 rounded hover:bg-black/50 transition"
      >
        Close
      </button>
      <h2 className="text-4xl font-serif text-center text-[#F5E6CA] mb-12">Gallery</h2>

      {/* Your gallery masonry grid or content can go here */}
      <div className="text-center text-white/70">Gallery content goes here...</div>
    </div>
  );
};
