interface ProductSize {
  size: string
}

export function ButtonSizes({ size }: ProductSize) {
  return (
    <button
      type="button"
      className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
    >
      {size}
    </button>
  )
}
