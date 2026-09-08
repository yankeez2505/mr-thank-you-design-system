import '../../styles.css';
import { Button } from '../../components/core/Button';

const FILTERS = ['All', 'Clothing', 'Accessories', 'Sports', 'New', 'Sales'];
const PRODUCTS = [
  { img: '/assets/images/shop-catalog-1.png', cat: 'Clothing', badge: 'NEW' },
  { img: '/assets/images/shop-catalog-1-3.jpg', cat: 'Clothing', badge: 'SALE', kind: 'sale' },
  { img: '/assets/images/shop-catalog-1-5.jpg', cat: 'Accessories' },
  { img: '/assets/images/shop-catalog-1-7.jpg', cat: 'Sports', badge: 'Sold Out', kind: 'out' },
];
const STATS = [
  ['46,562,572+', 'Individuals Fed'],
  ['55,825,462+', 'Meals Delivered'],
  ['8,725,979+', 'Pounds of Food'],
];
const MISSIONS = [
  { name: 'Mental Health Services', img: '/assets/images/shop-ellipse-2519.jpg' },
  { name: 'Save the Children', img: '/assets/images/shop-ellipse-2519-2.jpg' },
  { name: 'East Side Riders Bike Club', img: '/assets/images/shop-ellipse-2519-3.jpg' },
  { name: 'Brave Trails', img: '/assets/images/shop-ellipse-2519-4.jpg' },
];
const REVIEWS = [
  ['Great quality and the mission behind it makes every order feel worth it.', 'Ann Johnson'],
  ['Fits perfectly, shipped fast. Ordering again for the whole team.', 'Jack Green'],
  ['The fabric is heavier than I expected, in a good way.', 'Max B.'],
  ['Bought as a gift, ended up keeping it. Buying a second one.', 'Monica Vogel'],
];

export default function Home() {
  return (
    <>
      <nav className="nav">
        <b>MR. THANK YOU</b>
        <div className="nav__links s-sm"><a href="#best">SHOP</a><a href="#mission">SUPPORT</a><a href="#more">COLLECTIONS</a></div>
        <a href="#" className="s-sm">Account</a>
        <a href="#" className="s-sm">Cart (0)</a>
      </nav>

      <header className="hero">
        <div className="row">
          <h1 className="s-h1">Every purchase helps those in need</h1>
          <p className="s-body">We are fully committed to helping alleviate suffering wherever and whenever we are able.</p>
          <button className="cta">Shop All To Support</button>
        </div>
      </header>

      <section className="sect" id="best"><div className="row">
        <h2 className="s-h4">Best Sellers</h2>
        <div className="filters">
          {FILTERS.map((f, i) => <button key={f} aria-pressed={i === 0}>{f}</button>)}
        </div>
        <div className="products">
          {PRODUCTS.map(p => (
            <article className="prod" key={p.img}>
              <img src={p.img} alt="" />
              {p.badge && <span className="prod__badge s-cap" data-kind={p.kind}>{p.badge}</span>}
              <div className="prod__row"><b className="s-strong">Short Title</b><span className="s-strong">$99</span></div>
              <span className="s-sm">{p.cat}</span>
            </article>
          ))}
        </div>
      </div></section>

      <section className="mission" id="mission"><div className="row">
        <h2 className="s-h2">Our Mission</h2>
        <p className="s-body-r">We are fully committed to helping alleviate suffering wherever and whenever we are able.</p>
        <div className="stats">
          {STATS.map(([n, label]) => <div key={label}><b className="s-h3">{n}</b><span className="s-sm">{label}</span></div>)}
        </div>
        <button className="cta">Shop All To Support</button>
      </div></section>

      <section className="sect" id="more"><div className="row">
        <h2 className="s-h4">Missions</h2>
        <div className="products">
          {MISSIONS.map(m => (
            <article className="prod" key={m.name}>
              <img src={m.img} alt="" />
              <div className="prod__row"><b className="s-strong">{m.name}</b></div>
            </article>
          ))}
        </div>
      </div></section>

      <section className="sect"><div className="row">
        <h2 className="s-h4">Reviews</h2>
        <div className="reviews">
          {REVIEWS.map(([text, name]) => (
            <article className="review" key={name}>
              <p className="s-sm">{text}</p>
              <b className="s-strong">{name}</b>
              <span className="s-sm">New York, USA</span>
            </article>
          ))}
        </div>
      </div></section>

      <footer className="ftr"><div className="row">
        <div className="ftr__cols">
          <div><b className="s-h6">MR. THANK YOU</b><p className="s-sm">Every purchase helps those in need.</p></div>
          <div><b className="s-cap">Help</b>{['FAQs', 'Size details', 'Track your order', 'Account login', 'Return and exchange', 'Contact us'].map(l => <a className="s-xs" href="#" key={l}>{l}</a>)}</div>
          <div><b className="s-cap">About</b>{['Philanthropy', 'Reviews', 'Accessibility statement', 'Terms and conditions', 'Reseller policy'].map(l => <a className="s-xs" href="#" key={l}>{l}</a>)}</div>
          <div>
            <b className="s-cap">Newsletter</b>
            <form onSubmit={e => e.preventDefault()}>
              <input className="s-sm" placeholder="Enter your email" aria-label="Email" />
              <Button size="large" type="white">Join</Button>
            </form>
          </div>
        </div>
        <p className="s-sub ftr__legal">2026 MR. THANK YOU. All rights reserved</p>
      </div></footer>
    </>
  );
}
