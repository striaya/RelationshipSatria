import { useState, useEffect } from 'react'
import {
  Heart, Camera, BookOpen, Mail, Home, Image,
  ChevronLeft, ChevronRight, X, Clock, ArrowRight,
  UtensilsCrossed
} from 'lucide-react'
import './index.css'
import { Image as ImageIcon } from 'lucide-react'


/* ─── DATA ─────────────────────────────────────────────── */
const GALLERY = [
  { id: 1,  label: 'Pacarnya Satria',  src: '/photo/fani1.jpeg', tall: true  },
  { id: 2,  label: 'Pacarnya Satria',       src: '/photo/fani2.jpeg', tall: false },
  { id: 3,  label: 'Pacarnya Satria',    src: '/photo/fani3.jpeg', tall: false },
  { id: 4,  label: 'Pacarnya Satria',    src: '/photo/fanikecil.jpeg', tall: true  },
  { id: 5,  label: 'Pacarnya Satria',       src: '/photo/fani5.jpeg', tall: false },
  { id: 6,  label: 'Pacarnya Satria',      src: '/photo/fani6.jpeg', tall: false },
  { id: 7,  label: 'Pacarnya Satria',   src: '/photo/fani7.jpeg', tall: true  },
  { id: 8,  label: 'Pacarnya Satria',      src: '/photo/fani8.jpeg', tall: false },
  { id: 9,  label: 'Pacarnya Satria',     src: '/photo/fani9.jpeg', tall: false },
  { id: 10, label: 'Pacarnya Satria',     src: '/photo/fani10.jpeg', tall: true  },
  { id: 11, label: 'Pacarnya Satria',         src: '/photo/fani11.jpeg', tall: false },
  { id: 12, label: 'Pacarnya Satria',         src: '/photo/fani12.jpeg', tall: false },
  { id: 13, label: 'Pacarnya Satria',         src: '/photo/fanni13.jpeg', tall: false },
  { id: 14, label: 'Pacarnya Satria',         src: '/photo/fani14.jpeg', tall: false },
  { id: 15, label: 'Pacarnya Satria',         src: '/photo/fani15.jpeg', tall: false },
  { id: 16, label: 'Pacarnya Satria',         src: '/photo/fani16.jpeg', tall: false },
  { id: 17, label: 'Pacarnya Satria',         src: '/photo/fani17.jpeg', tall: false },
  { id: 18, label: 'Pacarnya Satria',         src: '/photo/fani18.jpeg', tall: false },
  { id: 19, label: 'Pacarnya Satria',         src: '/photo/fani19.jpeg', tall: false },
  { id: 20, label: 'Pacarnya Satria',         src: '/photo/fani20.jpeg', tall: false },
  { id: 21, label: 'Pacarnya Satria',         src: '/photo/fani21.jpeg', tall: false },
  { id: 22, label: 'Pacarnya Satria',         src: '/photo/fani22.jpeg', tall: false },
  { id: 23, label: 'Pacarnya Satria',         src: '/photo/fani23.jpeg', tall: false },
  { id: 24, label: 'Pacarnya Satria',         src: '/photo/fani24.jpeg', tall: false },
  { id: 25, label: 'Pacarnya Satria',         src: '/photo/fani25.jpeg', tall: false },
  { id: 26, label: 'Pacarnya Satria',         src: '/photo/fani26.jpeg', tall: false },
  { id: 27, label: 'Pacarnya Satria',         src: '/photo/fani27.jpeg', tall: false },
  { id: 28, label: 'Pacarnya Satria',         src: '/photo/fani28.jpeg', tall: false },
  { id: 29, label: 'Pacarnya Satria',         src: '/photo/fani29.jpeg', tall: false },
  { id: 30, label: 'Pacarnya Satria',         src: '/photo/fani30.jpeg', tall: false },
  { id: 31, label: 'Pacarnya Satria',         src: '/photo/fani31.jpeg', tall: false },
  { id: 32, label: 'Pacarnya Satria',         src: '/photo/fani32.jpeg', tall: false },
  { id: 33, label: 'Pacarnya Satria',         src: '/photo/fani33.jpeg', tall: false },
  { id: 34, label: 'Pacarnya Satria',         src: '/photo/fani34.jpeg', tall: false },
  { id: 35, label: 'Pacarnya Satria',         src: '/photo/fani35.jpeg', tall: false },
  { id: 36, label: 'Pacarnya Satria',         src: '/photo/fani36.jpeg', tall: false },
  { id: 37, label: 'Pacarnya Satria',         src: '/photo/fani37.jpeg', tall: false },
  { id: 38, label: 'Pacarnya Satria',         src: '/photo/fani38.jpeg', tall: false },
  { id: 39, label: 'Pacarnya Satria',         src: '/photo/fani39.jpeg', tall: false },
  { id: 40, label: 'Pacarnya Satria',         src: '/photo/fani40.jpeg', tall: false },
  { id: 41, label: 'Pacarnya Satria',         src: '/photo/fani41.jpeg', tall: false },
  { id: 42, label: 'Pacarnya Satria',         src: '/photo/fani42.jpeg', tall: false },
  { id: 43, label: 'Pacarnya Satria',         src: '/photo/fani43.jpeg', tall: false },
  { id: 44, label: 'Pacarnya Satria',         src: '/photo/fani44.jpeg', tall: false },
  { id: 45, label: 'Pacarnya Satria',         src: '/photo/fani45.jpeg', tall: false },
  { id: 46, label: 'Pacarnya Satria',         src: '/photo/fani46.jpeg', tall: false },
  { id: 47, label: 'Pacarnya Satria',         src: '/photo/fani47.jpeg', tall: false },
  { id: 48, label: 'Pacarnya Satria',         src: '/photo/fani48.jpeg', tall: false },
  { id: 49, label: 'Pacarnya Satria',         src: '/photo/fani49.jpeg', tall: false },
  { id: 50, label: 'Pacarnya Satria',         src: '/photo/fani50.jpeg', tall: false },
  { id: 51, label: 'Pacarnya Satria',         src: '/photo/fani51.jpeg', tall: false },
  { id: 52, label: 'Pacarnya Satria',         src: '/photo/fani52.jpeg', tall: false },
  { id: 53, label: 'Pacarnya Satria',         src: '/photo/fani53.jpeg', tall: false },
  { id: 54, label: 'Pacarnya Satria',         src: '/photo/fani54.jpeg', tall: false },
  { id: 55, label: 'Pacarnya Satria',         src: '/photo/fani55.jpeg', tall: false },
  { id: 56, label: 'Pacarnya Satria',         src: '/photo/fani56.jpeg', tall: false },
  { id: 57, label: 'Pacarnya Satria',         src: '/photo/fani57.jpeg', tall: false },
  { id: 58, label: 'Pacarnya Satria',         src: '/photo/fani58.jpeg', tall: false },
  { id: 59, label: 'Pacarnya Satria',         src: '/photo/fani59.jpeg', tall: false },
  { id: 60, label: 'Pacarnya Satria',         src: '/photo/fani60.jpeg', tall: false },
  { id: 61, label: 'Pacarnya Satria',         src: '/photo/fani61.jpeg', tall: false },
  { id: 62, label: 'Pacarnya Satria',         src: '/photo/fani62.jpeg', tall: false },
  { id: 63, label: 'Pacarnya Satria',         src: '/photo/fani63.jpeg', tall: false },
  { id: 64, label: 'Pacarnya Satria',         src: '/photo/fani64.jpeg', tall: false },
]

const TIMELINE = [
  { date: '', event: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, molestias.', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sunt.' },
  // { date: 'Maret 2026', event: 'Kencan Pertama', desc: 'Segelas kopi, berjam-jam percakapan, dan tawa yang tidak berhenti. Waktu terasa terlalu cepat berlalu.' },
  { date: '', event: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur praesentium fuga et?', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, sit.' },
]

const LETTERS = [
  { from: 'Lorem ipsum dolor sit amet.', date: '14 Februari 2026', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit itaque veritatis doloribus provident porro aut eum dolorem exercitationem quo beatae.' },
  { from: 'Lorem ipsum dolor sit.', date: '22 Maret 2026', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ex eos, minima exercitationem iste libero repellendus illo fuga minus quia iusto.' },
  { from: 'Lorem ipsum dolor sit amet.', date: '1 April 2026', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis magni illo vero ipsa ea, quam possimus omnis et officiis temporibus nostrum eos!' },
]

const FOODS = [
  // { id: 1, name: 'Mie Ayam',       desc: 'Favoritnya dari kecil', src: null },
  // { id: 2, name: 'Boba Taro',      desc: 'Minuman wajib tiap ketemu', src: null },
  // { id: 3, name: 'Ayam Geprek',    desc: 'Level pedas paling tinggi', src: null },
  // { id: 4, name: 'Matcha Latte',   desc: 'Tiap pagi harus ada', src: null },
  { id: 5, name: 'Sushi',          desc: 'Makan Favorit', src: 'https://s3-publishing-cmn-svc-prd.s3.ap-southeast-1.amazonaws.com/article/X8oyuPJfYdskg0DaLHzIW/original/040009200_1605780934-Nikmati-Beragam-Manfaat-Sushi-untuk-Kesehatan-shutterstock_1470615731.jpg' },
  // { id: 6, name: 'Strawberry Ice', desc: 'Dessert kesukaan', src: null },
]

const NAV = [
  { id: 'home',    label: 'Beranda', Icon: Home },
  { id: 'gallery', label: 'Gallery', Icon: ImageIcon },
  { id: 'story',   label: 'Cerita',  Icon: BookOpen },
  { id: 'letters', label: 'Surat',   Icon: Mail },
]

/* ─── LIGHTBOX ────────────────────────────────────────── */
function Lightbox({ index, onClose, onPrev, onNext }) {
  const item = GALLERY[index]

  useEffect(() => {
    const h = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [onClose, onNext, onPrev])

  return (
    <div className="lb-backdrop" onClick={onClose}>
      <div className="lb-box" onClick={e => e.stopPropagation()}>
        <button className="lb-close" onClick={onClose}><X size={14} /></button>
        {item.src
          ? <img className="lb-img" src={item.src} alt={item.label} />
          : (
            <div className="lb-ph">
              <Camera size={32} strokeWidth={1} />
              <p>Tambahkan src foto {item.id}</p>
            </div>
          )
        }
        <button className="lb-nav lb-prev" onClick={onPrev}><ChevronLeft size={18} /></button>
        <button className="lb-nav lb-next" onClick={onNext}><ChevronRight size={18} /></button>
        <div className="lb-caption">{item.label}</div>
        <div className="lb-counter">{index + 1} / {GALLERY.length}</div>
      </div>
    </div>
  )
}

/* ─── COUNTDOWN ──────────────────────────────────────── */
function Countdown() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 })
  useEffect(() => {
    const start = new Date('2026-03-22T00:00:00')
    const tick = () => {
      const diff = Date.now() - start.getTime()
      setT({ d: Math.floor(diff / 86400000), h: Math.floor((diff % 86400000) / 3600000), m: Math.floor((diff % 3600000) / 60000), s: Math.floor((diff % 60000) / 1000) })
    }
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id)
  }, [])
  return (
    <div className="cd-wrap">
      <div className="cd-card">
        <div className="cd-label"><Clock size={11} />Waktu Bersama</div>
        <h3 className="cd-title">Dari Awal Kenalan</h3>
        <div className="cd-grid">
          {[{ v: t.d, l: 'Hari' }, { v: t.h, l: 'Jam' }, { v: t.m, l: 'Menit' }, { v: t.s, l: 'Detik' }].map(u => (
            <div key={u.l} className="cd-unit">
              <span className="cd-num">{String(u.v).padStart(2, '0')}</span>
              <span className="cd-lbl">{u.l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── PAGE: HOME ─────────────────────────────────────── */
function HomePage({ goGallery }) {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-deco-left" />
        <div className="hero-deco-right" />
        <div className="hero-bg-circle hbc1" />
        <div className="hero-bg-circle hbc2" />
        <div className="hero-inner">
          <div className="hero-eyebrow">
            <div className="hero-line" />
            Pacar Aku Inih
            <div className="hero-line" />
          </div>
          <h1 className="hero-title">
            Pacar Satria,
            <span className="hero-title-italic">Cantik Bangett</span>
          </h1>
          <p className="hero-sub">
            Kalo gapercaya liat aja sendiri fotonya
          </p>
          <button className="hero-btn" onClick={goGallery}>
            <Camera size={15} />
            Lihat Gallery Foto
            <ArrowRight size={14} />
          </button>
          <div className="scroll-hint">
            <div className="scroll-line" />
            <span>Scroll</span>
          </div>
        </div>
      </section>
      <Countdown />
    </div>
  )
}

/* ─── PAGE: GALLERY ──────────────────────────────────── */
function GalleryPage() {
  const [lb, setLb] = useState(null)
  return (
    <div className="page">
      <div className="gallery-page">
        <div className="pg-header">
          <div className="pg-tag">
            <div className="pg-tag-line" />
              Pacarnya Satria
           <div className="pg-tag-line" />
          </div>
          <h2 className="pg-title">Foto-Foto <em></em></h2>
          <p className="pg-desc">Cantik banget kan iyadong hehehe</p>
        </div>

        <div className="gal-grid">
          {GALLERY.map((item, idx) => (
            <div key={item.id} className="gal-item" onClick={() => setLb(idx)}>
              {item.src
                ? <img className="gal-img" src={item.src} alt={item.label} />
                : (
                  <div className="gal-ph">
                    <div className="gal-ph-num">{String(item.id).padStart(2, '0')}</div>
                    <Camera size={18} strokeWidth={1} />
                    <p>Ganti src foto {item.id}<br />di array GALLERY</p>
                  </div>
                )
              }
              <div className="gal-overlay">
                <span className="gal-label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lb !== null && (
        <Lightbox
          index={lb}
          onClose={() => setLb(null)}
          onPrev={() => setLb(i => (i - 1 + GALLERY.length) % GALLERY.length)}
          onNext={() => setLb(i => (i + 1) % GALLERY.length)}
        />
      )}
    </div>
  )
}

/* ─── PAGE: STORY ────────────────────────────────────── */
function StoryPage() {
  return (
    <div className="page">
      <div className="pg-header" style={{ padding: '3.5rem 2rem 2rem' }}>
        <div className="pg-tag"><div className="pg-tag-line" />Lorem, ipsum.<div className="pg-tag-line" /></div>
        <h2 className="pg-title">Cerita <em>Tentang Kita Berdua</em></h2>
      </div>
      <div className="story-wrap" style={{ paddingTop: '1rem' }}>
        <div className="timeline">
          {TIMELINE.map((t, i) => (
            <div key={i} className="tl-item">
              <div className="tl-dot" />
              <div className="tl-date">{t.date}</div>
              <h3 className="tl-event">{t.event}</h3>
              <p className="tl-desc">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── PAGE: LETTERS ──────────────────────────────────── */
function LettersPage() {
  return (
    <div className="page">
      <div className="pg-header" style={{ padding: '3.5rem 2rem 2rem' }}>
        <div className="pg-tag"><div className="pg-tag-line" />Lorem, ipsum.<div className="pg-tag-line" /></div>
        <h2 className="pg-title">Lorem, ipsum. <em>Lorem, ipsum.</em></h2>
      </div>
      <div className="letters-wrap" style={{ paddingTop: '1rem' }}>
        {LETTERS.map((l, i) => (
          <div key={i} className="letter-card">
            <div className="letter-from"><Heart size={10} fill="currentColor" />{l.from}</div>
            <p className="letter-text">{l.text}</p>
            <div className="letter-date">{l.date}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── FOOD MODAL ─────────────────────────────────────── */
function FoodModal({ onClose }) {
  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: 'rgba(42,31,34,0.55)',
      backdropFilter: 'blur(8px)',
      zIndex: 7000,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '1rem',
      animation: 'pgIn 0.3s ease'
    }} onClick={onClose}>
      <div style={{
        background: 'white', borderRadius: 20,
        width: '100%', maxWidth: 520,
        maxHeight: '85vh', overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        boxShadow: '0 30px 80px rgba(180,120,130,0.25)'
      }} onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div style={{
          padding: '1.4rem 1.6rem',
          borderBottom: '1px solid #ede5e7',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexShrink: 0
        }}>
          <div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9747f', fontWeight: 700, marginBottom: 4 }}>
              Her Favorites
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 400, color: '#2a1f22' }}>
              Makanan <em style={{ fontStyle: 'italic', color: '#c9747f' }}>Favoritnya</em>
            </h2>
          </div>
          <button onClick={onClose} style={{
            width: 36, height: 36, borderRadius: '50%',
            border: '1px solid #ede5e7', background: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: '#8a7a7c', transition: 'all 0.2s'
          }}>
            <X size={15} />
          </button>
        </div>

        {/* Grid */}
        <div style={{
          overflowY: 'auto', padding: '1.2rem 1.4rem',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.9rem'
        }}>
          {FOODS.map(food => (
            <div key={food.id} style={{
              borderRadius: 14, overflow: 'hidden',
              border: '1px solid #ede5e7',
              background: '#faf9f7',
              transition: 'all 0.25s ease'
            }}>
              {/* Foto atau placeholder */}
              <div style={{
                aspectRatio: '4/3', background: 'linear-gradient(135deg, #f4f1ee, #eedde0)',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                gap: '0.4rem', overflow: 'hidden'
              }}>
                {food.src
                  ? <img src={food.src} alt={food.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  : <>
                      <UtensilsCrossed size={24} strokeWidth={1} color="#c9a0a8" />
                      <span style={{ fontSize: '0.6rem', color: '#b89a9d', letterSpacing: '0.06em' }}>Tambah foto</span>
                    </>
                }
              </div>
              {/* Info */}
              <div style={{ padding: '0.7rem 0.85rem' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.95rem', color: '#2a1f22', marginBottom: 2 }}>{food.name}</div>
                <div style={{ fontSize: '0.68rem', color: '#8a7a7c', lineHeight: 1.4 }}>{food.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── APP ────────────────────────────────────────────── */
export default function App() {
const [page, setPage] = useState('home')
const [showFood, setShowFood] = useState(false)

  const go = (id) => {
    setPage(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="navbar">
        <div className="brand">
          <div className="brand-dot" />
          Our Love Story
        </div>
        <div className="nav-links">
          {NAV.map(({ id, label, Icon }) => (
            <button key={id} className={`nav-btn ${page === id ? 'active' : ''}`} onClick={() => go(id)}>
              <Icon size={13} />{label}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <nav className="bottom-nav">
        <div className="bot-inner">
          {NAV.map(({ id, label, Icon }) => (
            <button key={id} className={`bot-btn ${page === id ? 'active' : ''}`} onClick={() => go(id)}>
              <div className="bot-icon"><Icon size={21} strokeWidth={1.6} /></div>
              <span>{label}</span>
            </button>
          ))}
        </div>
      </nav>

      <main className="shell">
        {page === 'home'    && <HomePage goGallery={() => go('gallery')} />}
        {page === 'gallery' && <GalleryPage />}
        {page === 'story'   && <StoryPage />}
        {page === 'letters' && <LettersPage />}
      </main>
{/* Tombol Makanan - Floating */}
      <button
        onClick={() => setShowFood(true)}
        style={{
          position: 'fixed',
          bottom: showFood ? '-100px' : '90px',
          right: '1.2rem',
          width: 56, height: 56,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #c9747f, #a85965)',
          border: 'none', color: 'white',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', zIndex: 800,
          boxShadow: '0 6px 28px rgba(201,116,127,0.45)',
          transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
          transform: showFood ? 'scale(0)' : 'scale(1)'
        }}
        title="Makanan Favorit"
      >
        <UtensilsCrossed size={22} />
      </button>

      {showFood && <FoodModal onClose={() => setShowFood(false)} />}
    </>
  )
}
