import ChevronLeft from '~/assets/chevron-left-icon.svg?react'
import ChevronRight from '~/assets/chevron-right-icon.svg?react'
import userImage from '~/assets/user-2.jpg'
import { Avatar } from '~/components'

export const Home = () => {
  return (
    <div className="col-[content/full] row-[content] grid grid-cols-subgrid content-start gap-y-7.5">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-5">
          <Avatar src={userImage} className="size-12.5" />
          <h2 className="title text-fluid-2xl">Dollie Blair</h2>
        </div>

        <div className="ml-auto flex items-center gap-2.5">
          <button
            className="inline-grid size-10 cursor-pointer place-items-center rounded-full p-2
            dark:bg-white/10 dark:text-white/40
            dark:hover:bg-white/20 dark:hover:text-white/60"
          >
            <ChevronLeft className="w-2 -translate-x-px" />
          </button>
          <button
            className="inline-grid size-10 cursor-pointer place-items-center rounded-full p-2
            dark:bg-white/10 dark:text-white/40
            dark:hover:bg-white/20 dark:hover:text-white/60"
          >
            <ChevronRight className="w-2 translate-x-px" />
          </button>
        </div>
      </div>

      <div className="col-span-full bg-orange-500/20 p-4">hello</div>
    </div>
  )
}
