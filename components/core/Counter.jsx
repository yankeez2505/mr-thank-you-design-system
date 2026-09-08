export function Counter({ style = 'solid', type = 'default', variant = 'number', children }) {
  return (
    <span className="counter" data-style={style} data-type={type} data-variant={variant}>{children}</span>
  );
}
