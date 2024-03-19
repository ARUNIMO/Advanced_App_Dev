import React from 'react'

const Loader = () => {
  return (
    <>
    <div class="relative flex w-64 animate-pulse gap-2 p-4">
  <div class="h-12 w-12 rounded-full bg-orange-400"></div>
  <div class="flex-1">
    <div class="mb-1 h-5 w-3/5 rounded-lg bg-orange-400 text-lg"></div>
    <div class="h-5 w-[90%] rounded-lg bg-orange-400 text-sm"></div>
  </div>
  <div class="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-orange-400"></div>
</div>
    </>
    )
}

export default Loader