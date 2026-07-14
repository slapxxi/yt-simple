import { Link } from 'react-router'
import BellIcon from '~/assets/bell-icon.svg?react'
import CamIcon from '~/assets/cam-icon.svg?react'
import GridIcon from '~/assets/grid-icon.svg?react'
import MenuIcon from '~/assets/menu-icon.svg?react'
import userImage from '~/assets/user-1.jpg'
import Logo from '~/assets/yt-logo.svg?react'
import { Avatar, SearchInput } from '~/components'

export const Header = () => {
  return (
    <header
      className="sticky top-0 z-10 grid grid-cols-subgrid self-start 
    bg-xzinc-900/70 py-5 backdrop-blur-lg col-[full]"
    >
      <div className="col-[header] grid grid-cols-subgrid">
        <div className="flex gap-7">
          <MenuIcon className="w-5" />
          <Logo className="w-29" />
        </div>

        <div className="grid grid-cols-[minmax(auto,830px)_1fr] gap-2 md:gap-10">
          <SearchInput />

          <div
            className="grid grid-flow-col grid-cols-[0_0_0_40px] items-center gap-0 justify-self-end
    *:cursor-pointer *:hover:opacity-60 md:grid-cols-[27px_21px_24px_40px] md:gap-10"
          >
            <button>
              <CamIcon />
            </button>
            <button>
              <GridIcon />
            </button>
            <button className="col-3 row-1">
              <BellIcon />
            </button>
            <div
              className="col-3 row-1 hidden size-5 translate-x-1/2 -translate-y-1/2 place-items-center rounded-full
    bg-red-500  text-xs text-white md:inline-grid"
            >
              <span className="-translate-x-px">3</span>
            </div>

            <Link to="/profile">
              <Avatar src={userImage} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
