import Link from 'next/link'
import Image from 'next/image'

export default function Search() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        <Link
          href={`/product/moletom-never-stop-learning`}
          className="relative group rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-baseline"
        >
          <Image
            src="/moletom-never-stop-learning.png"
            className="group-hover:scale-105 transition-transform duration-500"
            width={480}
            height={480}
            quality={100}
            alt=""
          />

          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-product-description rounded-full border-2 border-zinc-500 pl-5 p-1 bg-black/80 ">
            <span className="text-sm truncate">Moletom</span>

            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold whitespace-nowrap">
              {Number(129).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}
