export function BreedSelect() {
  return (
    <div className="flex flex-wrap items-center gap-2 bg-zinc-900 p-1 rounded-full shadow-sm">
      <div className="relative">
        <select
          aria-label="Select dog breed"
          className="appearance-none bg-zinc-800 text-stone-200 font-semibold text-xs rounded-full pl-4 pr-10 py-1 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
          id="breedSelect"
        >
          <option defaultValue="corgi">Pembroke Welsh Corgi</option>
          <option value="golden">Golden Retriever</option>
          <option value="frenchie">French Bulldog</option>
          <option value="shiba">Shiba Inu</option>
          <option value="samoyed">Samoyed</option>
        </select>
        <svg
          aria-hidden="true"
          className="shrink-0 size-5 text-stone-300 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </div>
      <button
        className="px-6 py-1 rounded-full bg-amber-500 text-amber-950 font-semibold text-xs hover:brightness-105 transition-all"
        type="button"
      >
        Show Dogs
      </button>
    </div>
  );
}
