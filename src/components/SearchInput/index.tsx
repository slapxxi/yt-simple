import SearchIcon from '~/assets/search-icon.svg?react'

export const SearchInput = () => {
  return (
    <label
      className="group inline-grid grid-cols-[auto_18px] items-center gap-2 rounded-full bg-white px-5 py-3 font-text
      dark:bg-xzinc-800 dark:has-focus:bg-xzinc-800/60"
    >
      <input
        type="text"
        placeholder="Search"
        className="placeholder:text-white/40 focus:outline-none w-full"
      />
      <SearchIcon data-slot="icon" className="group-has-focus:text-white/40" />
    </label>
  )
}
