import React, { createContext, useContext, useEffect } from "react";

const SheetContext = createContext({ open: false, onOpenChange: () => {} });

export function Sheet({ open, onOpenChange, children }) {
  return (
    <SheetContext.Provider value={{ open, onOpenChange }}>
      {children}
    </SheetContext.Provider>
  );
}

export function SheetContent({ side = "right", className = "", children }) {
  const { open, onOpenChange } = useContext(SheetContext);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  const basePos =
    side === "right"
      ? "top-0 right-0 h-full w-full max-w-4xl"
      : side === "left"
      ? "top-0 left-0 h-full w-full max-w-4xl"
      : side === "bottom"
      ? "bottom-0 left-0 w-full"
      : "top-0 right-0 h-full w-full max-w-4xl";

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 ${open ? "block" : "hidden"}`}
        onClick={() => onOpenChange(false)}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      {/* Drawer */}
      <div
        className={`fixed z-50 bg-white shadow-lg ${basePos} ${open ? "translate-x-0" : side === "left" ? "-translate-x-full" : "translate-x-full"} transition-transform duration-300 ${className}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </>
  );
}

export function SheetHeader({ children, className = "" }) {
  return <div className={`p-4 border-b ${className}`}>{children}</div>;
}

export function SheetTitle({ children, className = "" }) {
  return <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>;
}

export function SheetDescription({ children, className = "" }) {
  return <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>;
}

export function SheetClose({ children, className = "" }) {
  const { onOpenChange } = useContext(SheetContext);
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