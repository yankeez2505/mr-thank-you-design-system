export function BrandButton({ tone, children, ...rest }) {
  return (
    <button className="b-btn" data-tone={tone} {...rest}>{children}</button>
  );
}
