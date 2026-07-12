import BellIcon from '~/assets/bell-icon.svg?react'
import CamIcon from '~/assets/cam-icon.svg?react'
import GridIcon from '~/assets/grid-icon.svg?react'
import MenuIcon from '~/assets/menu-icon.svg?react'
import userImage from '~/assets/user-1.jpg'
import Logo from '~/assets/yt-logo.svg?react'
import { Avatar, SearchInput } from '~/components'

export const Header = () => {
  return (
    <header className="col-[header] grid grid-cols-subgrid self-start px-5 py-5">
      <div className="flex gap-7">
        <MenuIcon className="w-5" />
        <Logo className="w-29" />
      </div>

      <div className="grid grid-cols-[minmax(auto,830px)_1fr] gap-2 md:gap-10">
        <SearchInput />

        <div
          className="grid grid-flow-col grid-cols-[0_0_0_40px] items-center 
          gap-0 justify-self-end md:grid-cols-[26px_21px_22px_40px] md:gap-10"
        >
          <CamIcon />
          <GridIcon />
          <BellIcon className="col-3 row-1" />
          <div
            className="col-3 row-1 hidden size-5 translate-x-1/2 -translate-y-1/2 place-items-center rounded-full
          bg-red-500  text-xs text-white md:inline-grid"
          >
            3
          </div>
          <Avatar src={userImage} />
        </div>
      </div>
    </header>
  )
}
