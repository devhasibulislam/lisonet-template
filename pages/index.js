import { Inter } from "next/font/google";
import URLHolder from "@/components/URLHolder";
import Head from "next/head";
// import ResponsiveTable from "@/components/ResponsiveTable";
import URLCards from "@/components/URLCards";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`h-screen w-screen overflow-y-auto overflow-x-hidden ${inter.className} p-4`}
    >
      <Head>
        <title>URL Shortener - Free</title>
      </Head>
      <section className="max-w-5xl mx-auto">
        <div className="w-full h-full flex flex-col gap-y-12">
          <URLHolder />
          {/* <ResponsiveTable /> */}
          <URLCards />
        </div>
      </section>
    </main>
  );
}
