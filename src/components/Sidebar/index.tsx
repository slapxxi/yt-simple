import Logo from '~/assets/logo.svg?react'
import UserIcon from '~/assets/user-icon.svg?react'
import config from './config'

export const Header = () => {
  return (
    <header className="col-[wide] row-[header] flex items-center justify-between py-4 text-fluid-lg text-white">
      <Logo />

      <nav>
        <ul className="flex items-center gap-x-10">
          {config.nav.map((item) => (
            <li key={item}>
              <a href="#" className="font-bold">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <a href="#" className="flex gap-2.5 items-center">
        <UserIcon className="size-5" />
        <span>Account</span>
      </a>
    </header>
  )
}
