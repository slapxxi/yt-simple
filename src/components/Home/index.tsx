import ChevronLeft from '~/assets/chevron-left-icon.svg?react'
import ChevronRight from '~/assets/chevron-right-icon.svg?react'
import foodImage from '~/assets/food.jpg'
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
        {config.videos.map((item) => (
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

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-5">
          <h2 className="title text-fluid-3xl">Recommended</h2>
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

      <div className="col-[content/full] grid auto-cols-[minmax(450px,1fr)] grid-flow-col gap-10 overflow-x-auto pb-4">
        {config.recommended.map((item) => (
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

      <div className="flex items-center gap-10">
        <div className="flex items-center gap-5">
          <Avatar src={foodImage} className="size-12.5" />
          <h2 className="title text-fluid-3xl">Food &amp; Drink</h2>
          <div className="text-fluid-base dark:text-white/40">
            Recommended channel for you
          </div>
        </div>

        <button className="ml-auto rounded-full bg-red-500 p-2 px-4 text-white">
          Subcribe 2.3m
        </button>

        <div className="flex items-center gap-2.5">
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
        {config.channel.map((item) => (
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
