import { useEffect, useState } from 'react'
import { portfolio } from '../data/portfolio'

const navLinks = [
  { href: '#home', label: 'Inicio' },
  { href: '#about', label: 'Sobre mí' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#contact', label: 'Contacto' },
]

function BurgerButton({ open, onClick }) {
  return (
    <button
      type="button"
      className="relative z-110 flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface/80 md:hidden"
      onClick={onClick}
      aria-expanded={open}
      aria-controls="mobile-nav"
      aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
    >
      <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
      <span
        className={`absolute h-0.5 w-5 bg-heading transition-all duration-300 ${
          open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-[0.65rem]'
        }`}
      />
      <span
        className={`absolute top-1/2 h-0.5 w-5 -translate-y-1/2 bg-heading transition-all duration-300 ${
          open ? 'scale-x-0 opacity-0' : ''
        }`}
      />
      <span
        className={`absolute h-0.5 w-5 bg-heading transition-all duration-300 ${
          open ? 'bottom-1/2 translate-y-1/2 -rotate-45' : 'bottom-[0.65rem]'
        }`}
      />
    </button>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(min-width: 768px)').matches) closeMenu()
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-100 border-b border-transparent bg-page/70 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-display text-2xl font-light tracking-tight text-heading no-underline hover:text-heading"
          onClick={closeMenu}
        >
          {portfolio.name}
        </a>

        <BurgerButton open={menuOpen} onClick={() => setMenuOpen((open) => !open)} />

        <nav className="hidden md:block" aria-label="Navegación principal">
          <ul className="flex list-none gap-6 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[0.9375rem] font-medium text-muted no-underline hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-105 bg-heading/20 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      />

      <nav
        id="mobile-nav"
        className={`absolute inset-x-0 top-full z-110 border-b border-line bg-page/95 px-6 py-8 backdrop-blur-md transition-all duration-300 ease-out md:hidden ${
          menuOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
        aria-label="Navegación móvil"
        aria-hidden={!menuOpen}
      >
        <ul className="flex list-none flex-col gap-1 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-lg px-2 py-3 font-display text-2xl font-light text-heading no-underline transition-colors hover:bg-accent-soft hover:text-accent"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
