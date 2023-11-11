'use client'

import * as ToggleGroup from '@radix-ui/react-toggle-group'

export function SizeButtons() {
  return (
    <ToggleGroup.Root type="single" className="flex gap-2">
      <ToggleGroup.Item
        value="P"
        className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold hover:bg-violet-400 data-[state=on]:bg-violet-500"
      >
        P
      </ToggleGroup.Item>

      <ToggleGroup.Item
        value="M"
        className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold hover:bg-violet-400 data-[state=on]:bg-violet-500"
      >
        M
      </ToggleGroup.Item>

      <ToggleGroup.Item
        value="G"
        className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold hover:bg-violet-400 data-[state=on]:bg-violet-500"
      >
        G
      </ToggleGroup.Item>

      <ToggleGroup.Item
        value="GG"
        className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold hover:bg-violet-400 data-[state=on]:bg-violet-500"
      >
        GG
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  )
}
