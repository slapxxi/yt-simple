import backdropImage from '~/assets/backdrop.jpg'
import ChevronLeft from '~/assets/chevron-left-icon.svg?react'
import ChevronRight from '~/assets/chevron-right-icon.svg?react'
import coverImage from '~/assets/cover21.jpg'
import DotIcon from '~/assets/dot-icon.svg?react'
import SearchIcon from '~/assets/search-icon.svg?react'
import userImage from '~/assets/user-2.jpg'
import { Avatar, SearchInput, VideoPreview } from '~/components'
import config from './config'

export const Profile = () => {
  return (
    <div className="col-[content/full] row-[content] grid grid-cols-subgrid content-start gap-y-7.5">
      <img
        src={backdropImage}
        alt="cover"
        className="aspect-1595/280 rounded-[14px] object-cover"
      />

      <div className="col-1 grid grid-cols-[80px_1fr_minmax(auto,180px)] grid-rows-[repeat(4,auto)] gap-x-4">
        <Avatar src={userImage} className="row-span-full size-20 self-center" />
        <h2 className="title row-2 text-fluid-2xl">Margaret Phelps</h2>
        <div className="row-3 dark:text-white/40">245K subscribed</div>
        <button className="col-3 row-[2/4] self-center rounded-full bg-red-500 p-2 px-4 text-fluid-base text-white">
          Subscribe 2.3m
        </button>
      </div>

      <div className="col-1 grid grid-cols-[1fr_minmax(auto,280px)] gap-10">
        <div className="grid gap-14">
          <nav
            className="grid auto-cols-[fit-content(120px)_minmax(10px,40px)] grid-flow-col items-center gap-0 
          [&:has(#channel-search:focus-within)]:invisible
          "
          >
            {config.nav.map((item, i) => (
              <a
                key={item}
                className="col-(--i) row-1 
                border-b border-transparent
                 data-[active=true]:border-red-500 data-[active=true]:text-red-500"
                href="#"
                data-active={i === 0}
                style={{ '--i': 1 + i * 2 }}
              >
                {item}
              </a>
            ))}

            <SearchInput
              id="channel-search"
              className="pointer-events-none col-(--span) row-1 visible opacity-0 has-focus:opacity-100"
              style={{ '--span': `1/${(config.nav.length + 1) * 2}` }}
            />

            <label
              htmlFor="channel-search"
              className="col-(--i) row-1"
              style={{ '--i': 1 + config.nav.length * 2 }}
            >
              <SearchIcon className="size-4" />
            </label>
          </nav>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid self-center">
              <img
                src={coverImage}
                alt=""
                className="col-1 row-1 aspect-video self-center rounded-[14px] object-cover"
              />
              <div className="col-1 row-1 m-2 place-self-end rounded-full bg-black/50 p-1 px-2 text-fluid-sm text-white">
                7:36
              </div>
            </div>
            <div className="col-2 row-span-full grid gap-2 self-center">
              <h3 className="title text-fluid-2xl">
                Choosing The Best Audio Player Software For Your Computer
              </h3>

              <p className="text-fluid-base dark:text-white/60">
                Your cheap internet-based banner advertising will become one of
                the sought for ads there are. Today, the world of Internet
                advertising is rapidly evolving beyond banner ads and intrusive
                pop-ups. Bayles A common medium for advertising on the Internet
                is the use of banner ads.
              </p>

              <div
                className="grid min-h-15 grid-cols-[fit-content(100%)_2px_minmax(min-content,max-content)] 
                items-center gap-2 text-fluid-base text-white/40"
              >
                <div>11k views</div>
                <DotIcon />
                <div>3 days ago</div>
              </div>
            </div>
          </div>
        </div>

        <section className="grid gap-7.5 self-start">
          <h3 className="title text-fluid-base dark:text-white/60">
            Recommended Channels
          </h3>

          <nav className="grid gap-7.5">
            {config.recommended.map((item) => (
              <a
                key={item.name}
                href="#"
                className="inline-grid gap-5 grid-cols-[50px_1fr] items-center"
              >
                <Avatar src={item.img} />
                <span className="title text-fluid-lg">{item.name}</span>
              </a>
            ))}
          </nav>
        </section>
      </div>

      <div className="flex items-center gap-4 col-1">
        <div className="flex items-center gap-5">
          <h2 className="title text-fluid-3xl">Margaret Phelps Videos</h2>
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
    </div>
  )
}
