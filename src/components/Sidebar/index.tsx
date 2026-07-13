import { Avatar } from '../Avatar'
import config from './config'
import SettingsIcon from '~/assets/settings-icon.svg?react'

export const Sidebar = () => {
  return (
    <aside className="grid content-between gap-y-7 overflow-hidden pb-4 text-fluid-base text-white/50 area-[sidebar]">
      <nav>
        <ul className="grid grid-rows-[auto_auto_minmax(64px,auto)] gap-7">
          {config.nav.map((item, i) => (
            <li key={item.label}>
              <a
                href="#"
                className="grid grid-cols-[20px_1fr] items-center gap-4 
      hover:text-white/80 data-[active=true]:text-red-500"
                data-active={i === 0}
              >
                <item.Icon />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="grid gap-7.5">
        <h2 className="title text-fluid-lg dark:text-white">Subscriptions</h2>
        <ul className="grid gap-6">
          {config.subscriptions.map((item, i) => (
            <li key={item.label} className="grid grid-cols-[26px_1fr] gap-2.5">
              <Avatar src={item.img} />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="grid grid-cols-[20px_1fr] items-center gap-4 self-end hover:text-white/80">
        <SettingsIcon />
        Settings
      </div>
    </aside>
  )
}
