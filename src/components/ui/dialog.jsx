import React, { createContext, useContext, useEffect } from "react";

const DialogContext = createContext({ open: false, onOpenChange: () => {} });

export function Dialog({ open, onOpenChange, children }) {
  return (
    <DialogContext.Provider value={{ open, onOpenChange }}>
      {children}
    </DialogContext.Provider>
  );
}

export function DialogContent({ className = "", children }) {
  const { open, onOpenChange } = useContext(DialogContext);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);
    // lock body scroll while dialog is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onOpenChange]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 ${open ? "block" : "hidden"}`}
        onClick={() => onOpenChange(false)}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      {/* Centered Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          className={`relative bg-white rounded-lg shadow-lg max-w-5xl w-[95%] md:w-[90%] ${className}`}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
        >
          {children}
        </div>
      </div>
    </>
  );
}

export function DialogHeader({ children, className = "" }) {
  return <div className={`p-4 border-b ${className}`}>{children}</div>;
}

export function DialogTitle({ children, className = "" }) {
  return <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>;
}

export function DialogClose({ children, className = "" }) {
  const { onOpenChange } = useContext(DialogContext);
  return (
    <button
      type="button"
      onClick={() => onOpenChange(false)}
      className={`absolute top-3 right-3 rounded-md p-2 text-gray-700 hover:text-black bg-black/5 ${className}`}
      aria-label="Close"
    >
      {children}
    </button>
  );
}