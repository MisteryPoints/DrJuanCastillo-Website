import Experience from "@/components/Experience";
import HappyClients from "@/components/HappyClients";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import PracticeAreas from "@/components/PracticeAreas";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dr. Juan Castillo Severino</title>
        <meta
          name="description"
          content="Justicia a tu alcance, siempre a tu lado."
        />
      </Head>
      <div className="h-screen bg-heromd md:bg-hero bg-no-repeat bg-cover relative z-0 shadow-xl">
        <div className="h-screen w-full bg-light/50 lg:bg-transparent absolute" />
        <div className="px-6 sm:px-24 md:px-32 lg:px-40 xl:px-48 2xl:px-80">
          <Navbar />
          <Header />
        </div>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-between py-12 lg:py-20 bg-bgDark m-auto">
        <PracticeAreas />
        <Experience />
      </div>
      <div className="flex flex-col items-center justify-between py-12 lg:py-20 bg-bgDarkest m-auto">
        <HappyClients />
      </div>
    </>
  );
}
