import { JijigStar } from "./icons/jijigStar";
import { Line } from "./icons/line";
import { Smile } from "./icons/smile";
import { Time } from "./icons/time";
import { TomSavar } from "./icons/tomSavar";
import { Tsahilgn } from "./icons/tsahilgn";
import { Tusal } from "./icons/tusal";
import { LoadMoreBtn } from "./LoadMoreBtn";

export function Hero() {
  return (
    <>
      <section
        className="bg-zinc-950 font-sans text-base text-stone-200 relative isolate w-full px-4 lg:px-8 pt-6 pb-10 overflow-hidden"
        id="discover"
      >
        <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-amber-300/10 blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute top-1/2 right-10 w-80 h-80 rounded-full bg-orange-400/10 blur-3xl pointer-events-none -z-10"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-4">
            <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-zinc-800 text-amber-300 font-semibold text-xs shadow-sm">
              <span>🐾</span>
              <span>Daily Joy Feed</span>
            </div>
            <h1 className="font-extrabold text-4xl leading-tight sm:text-5xl tracking-tight text-stone-200">
              Meet a New
              <span className="text-amber-500 relative inline-block">
                Friend
                <Line />
              </span>
            </h1>
            <p className="font-normal text-lg leading-7 text-stone-300 max-w-xl">
              Discover dogs from around the world, one adorable face at a time.
              Pure companionship, heart-melting grins, and gentle spirits.
            </p>

            <LoadMoreBtn />

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 w-full max-w-lg">
              <Mood zan="Friendliness" icon={<Smile />} gajralt="10 / 10" />
              <Mood zan="Energy Level" icon={<Tsahilgn />} gajralt="Vibrant" />
              <Mood zan="Mood Boost" icon={<Tusal />} gajralt="Instant" />
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative bg-zinc-900 p-4 rounded-3xl shadow-xl overflow-hidden group">
              <div className="relative w-full h-105 rounded-3xl overflow-hidden bg-zinc-700">
                <img
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  src="https://images.dog.ceo/breeds/retriever-golden/n02099601_100.jpg"
                />
                <div className="absolute top-4 left-4 flex items-center gap-1 px-4 py-1 rounded-full bg-zinc-900/80 backdrop-blur-md text-stone-200 font-semibold text-xs">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                  <span>Golden Retriever</span>
                </div>
                <div className="absolute top-4 right-4 px-4 py-1 rounded-full bg-amber-500 text-amber-950 font-semibold text-xs shadow-sm">
                  Gentle Giant
                </div>
                <div className="absolute inset-x-0 bottom-0 h-32 bg-zinc-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
                <div className="absolute bottom-4 inset-x-4 flex items-end justify-between">
                  <div>
                    <h3 className="font-bold text-2xl text-stone-200">
                      Sunny Cooper
                    </h3>
                    <p className="font-normal text-sm leading-5 text-stone-300">
                      Gentle companion • Loves afternoon park fetch
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-zinc-800/90 backdrop-blur-sm flex items-center justify-center text-amber-300 shadow-md">
                    <TomSavar />
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-1 flex items-center justify-between text-stone-300 font-semibold text-xs px-1">
                <span className="flex items-center gap-1">
                  <JijigStar />
                  AKC Sporting Group
                </span>
                <span className="flex items-center gap-1">
                  <Time />
                  10–12 Years
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Mood({ zan, icon, gajralt }) {
  return (
    <div className="flex flex-col gap-1 p-4 rounded-3xl bg-zinc-900 shadow-sm">
      <div className="flex items-center justify-between text-stone-300 font-semibold text-xs">
        <span>{zan}</span>
        {icon}
      </div>
      <span className="font-bold text-xl text-stone-200">{gajralt}</span>
      <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden mt-1">
        <div className="bg-amber-500 h-full w-full rounded-full"></div>
      </div>
    </div>
  );
}
