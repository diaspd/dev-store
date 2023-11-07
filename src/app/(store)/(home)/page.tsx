import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="col-span-6 relative group row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-baseline"
      >
        <Image
          src="/moletom-ai-side.png"
          className="group-hover:scale-105 transition-transform duration-500"
          width={920}
          height={920}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 pl-5 p-1 bg-black/80 ">
          <span className="text-sm truncate">Moleton Ai Side</span>

          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold whitespace-nowrap">
            R$ 129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="col-span-3 relative group row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-baseline"
      >
        <Image
          src="/moletom-java.png"
          className="group-hover:scale-105 transition-transform duration-500"
          width={920}
          height={920}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 pl-5 p-1 bg-black/80 ">
          <span className="text-sm truncate">Moleton Ai Side</span>

          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold whitespace-nowrap">
            R$ 129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="col-span-3 relative group row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-baseline"
      >
        <Image
          src="/moletom-ia-p-devs.png"
          className="group-hover:scale-105 transition-transform duration-500"
          width={920}
          height={920}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 pl-5 p-1 bg-black/80 ">
          <span className="text-sm truncate">Moleton Ai Side</span>

          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold whitespace-nowrap">
            R$ 129
          </span>
        </div>
      </Link>
    </div>
  )
}
