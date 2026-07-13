import config from './config'

export const Sidebar = () => {
  return (
    <aside className="text-fluid-base area-[sidebar]">
      <nav className="text-white/50">
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
    </aside>
  )
}
