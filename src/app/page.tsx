import { Category, Footer, Hero, Trending } from "~/components/layout";

export default function Home() {
  return (
    <main>
      <Hero />
      <Category />
      <Trending />
      <Footer />
    </main>
  );
}
