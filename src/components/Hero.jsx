import { useState } from 'react'
import { portfolio } from '../data/portfolio'

function HeroEdgeList({ title, items, side, isVisible }) {
  const isLeft = side === 'left'

  return (
    <aside
      className={`pointer-events-none absolute top-1/2 z-30 flex max-w-[min(16rem,28vw)] -translate-y-1/2 flex-col gap-4 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isLeft
          ? 'left-[clamp(1.25rem,4vw,3rem)] items-start text-left'
          : 'right-[clamp(1.25rem,4vw,3rem)] items-end text-right'
      } ${
        isVisible
          ? 'translate-x-0 opacity-100'
          : isLeft
            ? '-translate-x-6 opacity-0'
            : 'translate-x-6 opacity-0'
      }`}
      aria-hidden={!isVisible}
    >
      <p className="m-0 font-sans text-[0.6875rem] font-medium tracking-[0.28em] text-accent uppercase">
        {title}
      </p>
      <ul className={`flex list-none flex-col gap-3 p-0 ${isLeft ? 'items-start' : 'items-end'}`}>
        {items.map((item) => (
          <li
            key={item}
            className="font-display text-[clamp(1.05rem,1.6vw,1.35rem)] leading-snug font-light text-heading"
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  )
}

function HeroPortrait({ side, imageSrc, imageAlt, placeholderText, isActive, onActivate }) {
  const [hasImage, setHasImage] = useState(true)
  const isLeft = side === 'left'

  return (
    <button
      type="button"
      className={`relative shrink-0 cursor-pointer border-0 bg-transparent p-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-page ${
        isLeft ? 'z-10' : 'z-10 -ml-px'
      } ${
        isLeft
          ? `${isActive ? '-translate-x-[min(22vw,11rem)]' : ''} hover:-translate-x-[min(22vw,11rem)]`
          : `${isActive ? 'translate-x-[min(22vw,11rem)]' : ''} hover:translate-x-[min(22vw,11rem)]`
      }`}
      onMouseEnter={() => onActivate(side)}
      onFocus={() => onActivate(side)}
      onClick={() => onActivate(isActive ? null : side)}
      aria-label={isLeft ? 'Foto deportiva — ver disciplinas' : 'Foto profesional — ver experiencia'}
    >
      {hasImage ? (
        <img
          src={imageSrc}
          alt={imageAlt}
          draggable={false}
          onError={() => setHasImage(false)}
          className={`block h-[min(88svh,920px)] w-auto max-w-[50vw] select-none object-contain ${
            isLeft ? 'object-right' : 'object-left'
          }`}
        />
      ) : (
        <div
          className="flex h-[min(60svh,28rem)] w-[min(42vw,20rem)] flex-col items-center justify-center gap-2 px-4 text-center text-muted"
          aria-hidden="true"
        >
          <span className="font-medium">{placeholderText}</span>
          <small className="text-xs opacity-70">public/hero/{side}.png</small>
        </div>
      )}
    </button>
  )
}

function Hero() {
  const { sports, roles, photos } = portfolio.hero
  const [activeSide, setActiveSide] = useState(null)

  const showSports = activeSide === 'left'
  const showRoles = activeSide === 'right'

  return (
    <section
      id="home"
      aria-label="Presentación"
      className="relative w-full overflow-x-hidden bg-page pt-22"
      onMouseLeave={() => setActiveSide(null)}
    >
      <div className="relative flex min-h-[calc(100svh-5.5rem)] w-full items-center justify-center">
        <HeroEdgeList
          title="Deporte"
          items={sports}
          side="left"
          isVisible={showSports}
        />
        <HeroEdgeList
          title="Experiencia"
          items={roles}
          side="right"
          isVisible={showRoles}
        />

        <div className="flex items-center justify-center">
          <HeroPortrait
            side="left"
            imageSrc={photos.informal}
            imageAlt="Mitad izquierda del rostro — estilo deportivo"
            placeholderText="Foto deportiva"
            isActive={showSports}
            onActivate={setActiveSide}
          />
          <HeroPortrait
            side="right"
            imageSrc={photos.formal}
            imageAlt="Mitad derecha del rostro — estilo formal"
            placeholderText="Foto profesional"
            isActive={showRoles}
            onActivate={setActiveSide}
          />
        </div>
      </div>

      <p
        className={`pointer-events-none absolute bottom-6 left-1/2 z-20 -translate-x-1/2 font-sans text-[0.6875rem] tracking-[0.2em] text-muted uppercase transition-opacity duration-500 ${
          activeSide ? 'opacity-0' : 'opacity-60'
        }`}
        aria-hidden={!!activeSide}
      >
        Pasa el cursor sobre cada lado
      </p>
    </section>
  )
}

export default Hero
