import { Moon } from "./icons/moon";

export function Header() {
  return (
    <header className="sticky top-0 w-full z-50 bg-zinc-900/90 backdrop-blur-xl shadow-[0_12px_32px_-8px_rgba(18,20,19,0.7)]">
      <div className="w-full px-4 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-2 sm:h-16 sm:py-0">
        <div className="flex items-center gap-2">
          <span aria-hidden="true" className="text-2xl">
            🐾
          </span>
          <span className="font-bold text-xl text-stone-200 tracking-tight">
            Dog Explorer
          </span>
        </div>
        <nav className="flex items-center gap-2 md:gap-4">
          {/* <a
            aria-current="page"
            className="transition-colors bg-amber-500 text-amber-950 font-semibold text-sm rounded-full px-4 py-1"
            href="#discover"
          >
            Discover
          </a>
          <a
            className="font-semibold text-sm text-stone-300 hover:text-stone-200 px-4 py-1 rounded-full transition-colors"
            href="#breeds"
          >
            Breeds
          </a>
          <a
            className="font-semibold text-sm text-stone-300 hover:text-stone-200 px-4 py-1 rounded-full transition-colors"
            href="#gallery"
          >
            Gallery
          </a> */}
          <Navigation link="#discover" title="Discover" active />
          <Navigation link="#breeds" title="Breeds" />
          <Navigation link="#gallery" title="Gallery" />
        </nav>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle color mode"
            className="w-9 h-9 rounded-full bg-zinc-900 flex items-center justify-center text-amber-300 hover:bg-zinc-800 transition-colors"
            type="button"
          >
            <Moon />
          </button>
        </div>
      </div>
    </header>
  );
}

function Navigation({ link, title, active }) {
  if (active) {
    return (
      <a
        aria-current="page"
        className="transition-colors bg-amber-500 text-amber-950 font-semibold text-sm rounded-full px-4 py-1"
        href={link}
      >
        {title}
      </a>
    );
  }

  return (
    <a
      className="font-semibold text-sm text-stone-300 hover:text-stone-200 px-4 py-1 rounded-full transition-colors"
      href={link}
    >
      {title}
    </a>
  );
}
