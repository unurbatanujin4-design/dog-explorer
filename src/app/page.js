import { Header } from "./compld/header";
import { Footer } from "./compld/footer";
import { Gallery } from "./compld/gallery";
import { Hero } from "./compld/hero";
import { Explore } from "./compld/explore";
export default function Home() {
  return (
    <div>
      <Header />
      <main className="w-full bg-zinc-950">
        <div className="flex flex-col w-full">
          <Hero />
          <Explore />
          <Gallery />
        </div>
      </main>
      <Footer />
    </div>
  );
}
