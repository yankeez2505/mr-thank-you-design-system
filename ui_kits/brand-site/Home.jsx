import '../../styles.css';
import { NavPill } from '../../components/brand/NavPill';
import { IconButton } from '../../components/brand/IconButton';
import { OutlineHeading } from '../../components/brand/OutlineHeading';
import { ProductCard } from '../../components/brand/ProductCard';
import { Marquee } from '../../components/brand/Marquee';
import { BrandButton } from '../../components/brand/BrandButton';
import { SectionLabel } from '../../components/brand/SectionLabel';
import { DotPagination } from '../../components/brand/DotPagination';
import { RetailerChip } from '../../components/brand/RetailerChip';
import { SubscribeForm } from '../../components/brand/SubscribeForm';
import { Panel } from '../../components/brand/Panel';

const NAV = ['SHOP', 'OUR STORY', 'AVAILABLE WORLDWIDE'];
const PRODUCTS = [
  { image: '/assets/images/brand-shopnow-1.png', title: 'Headwear' },
  { image: '/assets/images/brand-shopnow-2.png', title: 'T-shirts' },
  { image: '/assets/images/brand-shopnow-3.png', title: 'Home & Sleep' },
  { image: '/assets/images/brand-shopnow-4.png', title: 'Accessories' },
];
const RETAILERS = ['NORDSTROM', 'PACSUN', 'ZUMIEZ', 'TILLYS', 'URBAN', 'ASOS'];

export default function Home() {
  return (
    <>
      <header className="hdr">
        <img src="/assets/logos/monogram-white.png" alt="Mr. Thank You" height="52" />
        <strong className="t-nav-20">MR. Thank You</strong>
        <nav>{NAV.map((t, i) => <NavPill key={t} href="#" active={i === 0}>{t}</NavPill>)}</nav>
        <div className="hdr__icons">
          {['Search', 'Account', 'Info', 'Cart'].map(l => <IconButton key={l} label={l} />)}
        </div>
      </header>

      <section className="shopnow">
        <OutlineHeading size="t-title-96">REP THE VIBE</OutlineHeading>
        <p className="t-body-24">Grab our freshest gear and make it your own.</p>
        <div className="shopnow__grid">{PRODUCTS.map(p => <ProductCard key={p.title} {...p} />)}</div>
      </section>

      <Marquee items={['MR. THANK YOU', 'AVAILABLE WORLDWIDE', 'NEW DROP']} />

      <section className="mission">
        <img src="/assets/images/brand-mission.png" alt="" />
        <Panel>
          <h2 className="t-title-48">OUR MISSION IS</h2>
          <p className="t-body-24">We are dedicated to closing the gap between where you are and where you aim to be.</p>
          <BrandButton tone="pink">LEARN MORE</BrandButton>
        </Panel>
      </section>

      <section className="findstore noise">
        <OutlineHeading size="t-title-48" variant="white">SHOP ALL</OutlineHeading>
        <div className="findstore__grid">
          {PRODUCTS.slice(0, 3).map(p => (
            <article key={p.title} className="fs-card">
              <img src={p.image} alt="" />
              <SectionLabel>{p.title}</SectionLabel>
            </article>
          ))}
        </div>
        <DotPagination count={3} active={0} />
        <BrandButton tone="mint">FIND A STORE</BrandButton>
      </section>

      <section className="whois">
        <img src="/assets/logos/monogram-white.png" alt="" width="174" />
        <h2 className="t-display-60">SOME NICE SLOGAN</h2>
      </section>

      <section className="wtb">
        <Panel>
          <OutlineHeading size="t-mega-128" variant="ghost">WHERE TO BUY</OutlineHeading>
          <div className="wtb__chips">{RETAILERS.map(r => <RetailerChip key={r}>{r}</RetailerChip>)}</div>
          <BrandButton>FIND A STORE</BrandButton>
        </Panel>
      </section>

      <footer className="ftr">
        <Panel>
          <div className="ftr__col"><h3 className="t-nav-20">SHOP</h3>{PRODUCTS.map(p => <a key={p.title} href="#">{p.title}</a>)}</div>
          <div className="ftr__col"><h3 className="t-nav-20">INFO</h3><a href="#">OUR STORY</a><a href="#">FIND A STORE</a><a href="#">CONTACT</a></div>
          <div className="ftr__col"><h3 className="t-nav-20">SUBSCRIBE</h3><SubscribeForm /></div>
        </Panel>
        <small className="t-legal-16">2026 MR. Thank you</small>
      </footer>
    </>
  );
}
