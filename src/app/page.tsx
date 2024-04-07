import LayOutNavLeft from "@/_components/layout/LayOutNavLeft";
import { SVGFeed, SVGList, SVGSettings } from "@/_components/svg/svgelements";
import Link from "next/link";

export default function Home() {
  return (
    
    <main>

      <LayOutNavLeft className="fixed top-0 left-0 flex flex-col justify-between gap-6 w-[240px] lg:w-[400px] h-screen p-8 lg:p-12">

        <div className="flex flex-col gap-4">

          <div className="rounded-xl p-8">
            <div className="lowercase font-extrabold text-2xl md:text-2xl lg:text-4xl xl:text-3xl font-logos">challengelist</div>
          </div>

          <div className="rounded-xl bg-white p-8">
            <div className="flex flex-col gap-4">
              <Link href='#' className="flex flex-row items-center gap-3 py-4 px-6 rounded-2xl hover:text-white hover:bg-purple-700 transition duration-300">
                <SVGFeed className="w-6 h-6"/>
                <span>Feed</span>
              </Link>
              <Link href='#' className="flex flex-row items-center gap-3 py-4 px-6 rounded-2xl hover:text-white hover:bg-purple-700 transition duration-300">
                <SVGList className="w-6 h-6" />
                <span>Challenges</span>
              </Link>
              <Link href='#' className="flex flex-row items-center gap-3 py-4 px-6 rounded-2xl hover:text-white hover:bg-purple-700 transition duration-300">
                <SVGFeed className="w-6 h-6"/>
                <span>Stats</span>
              </Link>
            </div>
          </div>
          
        </div>

        <div className="">
          <div className="rounded-xl bg-slate-200 p-6">
            <div className="flex flex-col gap-4">
              <Link href='#' className="flex flex-row items-center gap-3 py-4 px-6 rounded-xl hover:text-white hover:bg-purple-700 transition duration-300">
                <SVGSettings className="w-6 h-6"/>
                <span>Settings</span>
              </Link>
            </div>
          </div>
        </div>

      </LayOutNavLeft>

    </main>

  );
}
