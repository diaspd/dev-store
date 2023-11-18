import Link from 'next/link'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { Product } from '@/data/types/product'
import { api } from '@/data/api'

interface SearchProps {
  searchParams: {
    q: string
  }
}

async function searchProducts(query: string): Promise<Product[]> {
  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const products = await response.json()

  return products
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams

  if (!query) {
    redirect('/')
  }

  const products = await searchProducts(query)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="lg:grid lg:grid-cols-3 gap-6 space-y-6 lg:space-y-0 w-11/12 lg:w-full">
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="relative group rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-baseline"
            >
              <Image
                src={product.image}
                className="group-hover:scale-105 transition-transform duration-500"
                width={480}
                height={480}
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
    </div>
  )
}
