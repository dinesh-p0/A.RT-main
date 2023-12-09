import Display from "@/components/Display";
import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <div className="w-full sm:hidden">
        <MobileNav />
      </div>

      <div className="w-full max-sm:hidden">
        <Navbar />
      </div>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient"> Saturday</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Sumz, an open source article summarizer that
        transforms lengthy articles into clear and concize summaries.
      </h2>

      <Display />
    </main>
  );
}
