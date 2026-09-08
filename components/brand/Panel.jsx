export function Panel({ noise, children, ...rest }) {
  return (
    <div className={noise ? 'panel noise' : 'panel'} {...rest}>{children}</div>
  );
}
