import LayOutNavLeft from "@/_components/layout/LayOutNavLeft";
import LayOutNavTop from "@/_components/layout/LayOutNavTop";
import { SVGFeed, SVGList, SVGPlus, SVGSettings } from "@/_components/svg/svgelements";
import UICardChallenge from "@/_components/ui/UICardChallenge";
import Link from "next/link";

export default function Home() {
  return (
    
    <main className="flex flex-col w-full h-full max-h-screen overflow-hidden">

      <LayOutNavTop className="flex flex-row gap-2 justify-between items-center w-full h-fit border-b bg-neutral-50">

        <div className="px-4 py-6 md:p-8 border-l w-fit h-fit">
          <div className="lowercase font-extrabold text-2xl md:text-2xl lg:text-4xl xl:text-3xl font-logos">challengelist</div>
        </div>

        <div className="pr-4 md:pr-8">
          <div className="flex flex-row gap-2 items-center px-5 md:px-8 py-3 md:py-4 rounded bg-orange-600 hover:bg-neutral-900 text-orange-100 uppercase text-xs md:text-sm font-semibold md:font-bold tracking-wide md:tracking-widest transition duration-300"><span><SVGPlus className="w-6 h-6" /></span>New Challenge</div>
        </div>

      </LayOutNavTop>

      <div className="flex flex-row h-full bg-neutral-50">

        <LayOutNavLeft className="flex flex-col justify-between gap-6 h-[91dvh] md:h-[88dvh]">

          <div className="flex flex-col gap-4">

            <div className="py-8">
              <div className="flex flex-col">
                <Link href='#' className="flex flex-row items-center gap-3 py-4 pl-6 md:pl-8 pr-6 md:pr-20 hover:text-white bg-neutral-50 hover:bg-orange-600 transition duration-300">
                  <SVGFeed className="w-6 h-6"/>
                  <span className="hidden md:flex">Feed</span>
                </Link>
                <Link href='#' className="flex flex-row items-center gap-3 py-4 pl-6 md:pl-8 pr-6 md:pr-20 hover:text-white bg-neutral-50 hover:bg-orange-600 transition duration-300">
                  <SVGList className="w-6 h-6" />
                  <span className="hidden md:flex">Challenges</span>
                </Link>
                <Link href='#' className="flex flex-row items-center gap-3 py-4 pl-6 md:pl-8 pr-6 md:pr-20 hover:text-white bg-neutral-50 hover:bg-orange-600 transition duration-300">
                  <SVGFeed className="w-6 h-6"/>
                  <span className="hidden md:flex">Stats</span>
                </Link>
              </div>
            </div>
            
          </div>

          <div className="">
            <div className="bg-neutral-900 text-neutral-300">
              <div className="flex flex-col gap-4 py-4">
                <Link href='#' className="flex flex-row items-center gap-3 py-4 px-6 hover:text-white transition duration-300">
                  <SVGSettings className="w-6 h-6"/>
                  <span className="hidden md:flex">Settings</span>
                </Link>
              </div>
            </div>
          </div>

        </LayOutNavLeft>

        <div className="flex flex-col gap-20 bg-red-100/20 w-full p-8 md:p-20 overflow-y-auto">

          <div className="flex flex-col gap-8">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-4xl">All Challenges</h1>
            </div>

            <div className="grid grid-cols-12 gap-4 md:gap-4 w-full">

              <UICardChallenge />
              <UICardChallenge />
              <UICardChallenge />
              <UICardChallenge />

            </div>
          </div>
          
          <div className="flex flex-col gap-8">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-4xl">All Challenges</h1>
            </div>

            <div className="grid grid-cols-12 gap-4 md:gap-4 w-full">

              <UICardChallenge />
              <UICardChallenge />
              <UICardChallenge />
              <UICardChallenge />

            </div>
          </div>

        </div>

      </div>


    </main>

  );
}
