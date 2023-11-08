import { Skeleton } from '@/components/skeleton'

export default function HomeLoading() {
  return (
    <div className="flex flex-col lg:grid h-[860px] grid-cols-9 grid-rows-6 gap-6 ">
      <Skeleton className="flex flex-1 lg:col-span-6 lg:row-span-6 lg:h-[860px]" />
      <Skeleton className="flex flex-1 lg:col-span-3 lg:row-span-3" />
      <Skeleton className="flex flex-1 lg:col-span-3 lg:row-span-3" />
    </div>
  )
}
