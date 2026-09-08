export function ProductCard({ image, title, cta = 'SHOP NOW' }) {
  return (
    <article className="sticker-card"><img className="sticker-card__media" src={image} alt={title} /><div className="sticker-card__title">{title}</div><div className="sticker-card__cta">{cta}</div></article>
  );
}
