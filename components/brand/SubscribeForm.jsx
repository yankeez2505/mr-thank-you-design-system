export function SubscribeForm({ placeholder = 'YOUR EMAIL', cta = 'SIGN UP', onSubmit }) {
  return (
    <form className="subscribe" onSubmit={onSubmit}><input placeholder={placeholder} aria-label={placeholder} /><button className="b-btn" data-tone="mint">{cta}</button></form>
  );
}
