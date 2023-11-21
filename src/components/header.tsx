import Link from 'next/link'
import Image from 'next/image'
import { CartWidget } from './cart-widget'
import { SearchForm } from './search-form'
import { Suspense } from 'react'

export function Header() {
  return (
    <div className="flex lg:flex-row flex-col items-center lg:justify-between gap-8">
      <div className="flex items-center gap-5 pr-2 self-start lg:self-auto">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <Suspense fallback={null}>
          <SearchForm />
        </Suspense>
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
