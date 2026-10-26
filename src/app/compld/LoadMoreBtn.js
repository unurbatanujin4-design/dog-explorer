import { JijigSavarnud } from "./icons/jijigSavarnud";

export function LoadMoreBtn() {
  return (
    <div className="pt-4">
      <button
        className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-zinc-900 text-stone-200 font-semibold text-sm hover:bg-zinc-800 transition-transform active:scale-95 shadow-md"
        id="loadMoreBtn"
        type="button"
      >
        <span>🐾</span>
        <span>Show More Pups</span>
        <JijigSavarnud />
      </button>
    </div>
  );
}
