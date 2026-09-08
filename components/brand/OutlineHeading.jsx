export function OutlineHeading({ as: Tag = 'h2', variant, size = 't-title-48', children }) {
  return (
    <Tag className={`${size} outline-head`} data-outline={variant}>{children}</Tag>
  );
}
