import ChevronLeft from '~/assets/chevron-left-icon.svg?react'
import ChevronRight from '~/assets/chevron-right-icon.svg?react'
import userImage from '~/assets/user-2.jpg'
import { Avatar, VideoPreview } from '~/components'
import config from './config'

export const Home = () => {
  return (
    <div className="col-[content/full] row-[content] grid grid-cols-subgrid content-start gap-y-7.5 overflow-auto">
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

      <div className="col-[content/full] grid auto-cols-[minmax(250px,1fr)] grid-flow-col gap-10 overflow-x-auto pb-4">
        {config.videos.map((item, i) => (
          <VideoPreview
            author={item.author}
            duration={item.duration}
            img={item.img}
            key={item.title}
            published={item.published}
            title={item.title}
            views={item.views}
          />
        ))}
      </div>
    </div>
  )
}
