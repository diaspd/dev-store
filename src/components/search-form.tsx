'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'

export function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    const query = data.q

    if (!query) {
      return null
    }

    router.push(`/search?q=${query}`)
  }

  return (
    <div className="max-w-xs lg:max-w-none lg:w-[320px] items-center rounded-full bg-zinc-900 px-5 py-3 ring-700 focus-within:ring-2 focus-within:ring-zinc-400">
      <form
        autoComplete="off"
        onSubmit={handleSearch}
        className="flex gap-3 border-none"
      >
        <label htmlFor="query">
          <Search className="w-5 h-5 text-zinc-500" />
        </label>

        <input
          name="q"
          id="query"
          defaultValue={query ?? ''}
          placeholder="Buscar produtos..."
          className="flex-1 fill-none bg-transparent text-sm outline-none placeholder:text-zinc-500 rounded"
          required
        />
      </form>
    </div>
  )
}
