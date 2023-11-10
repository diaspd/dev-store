import Link from 'next/link'
import Image from 'next/image'
import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import { Metadata } from 'next'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const products = await response.json()

  return products
}

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="flex flex-col lg:grid max-h-app max-w-4/6 lg:max-w-none grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="col-span-6 relative group row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-baseline"
      >
        <Image
          src={highlightedProduct.image}
          className="group-hover:scale-105 transition-transform duration-500"
          width={920}
          height={920}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-10 lg:bottom-28 right-10 lg:right-28 h-12 flex items-center gap-2 max-w-product-description rounded-full border-2 border-zinc-500 pl-5 p-1 bg-black/80 ">
          <span className="text-sm truncate">{highlightedProduct.title}</span>

          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold whitespace-nowrap">
            {highlightedProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => {
        return (
          <Link
            href={`/product/${product.slug}`}
            key={product.id}
            className="col-span-3 relative group row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-baseline"
          >
            <Image
              src={product.image}
              className="group-hover:scale-105 transition-transform duration-500"
              width={920}
              height={920}
              quality={100}
              alt=""
            />

            <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-product-description rounded-full border-2 border-zinc-500 pl-5 p-1 bg-black/80 ">
              <span className="text-sm truncate">{product.title}</span>

              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold whitespace-nowrap">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
