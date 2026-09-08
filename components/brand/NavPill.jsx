export function NavPill({ href, active, children }) {
  return (
    <a className="nav-pill" href={href} aria-current={active ? 'page' : undefined}>{children}</a>
  );
}
