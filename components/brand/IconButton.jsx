export function IconButton({ tone, label, children }) {
  return (
    <button className="icon-btn" data-tone={tone} aria-label={label}>{children}</button>
  );
}
