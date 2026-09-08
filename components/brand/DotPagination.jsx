export function DotPagination({ count, active = 0 }) {
  return (
    <div className="dots">{Array.from({ length: count }, (_, i) => (<span key={i} aria-current={i === active} />))}</div>
  );
}
