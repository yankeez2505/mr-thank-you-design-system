export function Button({ style = 'primary', type = 'primary', size, variant, disabled, children, ...rest }) {
  return (
    <button className="lib-btn" data-style={style} data-type={type} data-size={size} data-variant={variant} disabled={disabled} {...rest}>{children}</button>
  );
}
