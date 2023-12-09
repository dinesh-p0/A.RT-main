import IndraComponent from "@/components/IndraComponent";
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
        Generate Images with <br className="max-md:hidden" />
        <span className="orange_gradient"> BARF 4.0 </span>
      </h1>
      <h2 className="desc">
        Generate amazing looking pictures for your website/articals.
      </h2>

      <IndraComponent />
    </main>
  );
}
