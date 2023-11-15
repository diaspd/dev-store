import { Search } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { CartWidget } from './cart-widget'

export function Header() {
  return (
    <div className="flex lg:flex-row flex-col items-center lg:justify-between gap-8">
      <div className="flex items-center gap-5 pr-2 self-start lg:self-auto">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <form className="flex max-w-xs lg:max-w-none lg:w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-700">
          <Search className="w-5 h-5 text-zinc-500" />

          <input
            placeholder="Buscar produtos..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </form>
      </div>

      <div className="flex self-start lg:self-auto items-center gap-4">
        <CartWidget />

        <div className="w-px h-4 bg-zinc-700"></div>

        <Link href="" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            className="w-6 h-6 rounded-full"
            width={24}
            height={24}
            alt=""
            src="https://github.com/diaspd.png"
          />
        </Link>
      </div>
    </div>
  )
}
