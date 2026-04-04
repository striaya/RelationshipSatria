import { useState, useEffect } from 'react'
import {
  Heart, Camera, BookOpen, Mail, Home, Image,
  ChevronLeft, ChevronRight, X, Clock, ArrowRight
} from 'lucide-react'
import './index.css'

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

const NAV = [
  { id: 'home',    label: 'Beranda', Icon: Home },
  { id: 'gallery', label: 'Gallery', Icon: Image },
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

/* ─── APP ────────────────────────────────────────────── */
export default function App() {
  const [page, setPage] = useState('home')

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
    </>
  )
}
