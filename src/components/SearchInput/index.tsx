import clsx from 'clsx'
import SearchIcon from '~/assets/search-icon.svg?react'

type SearchInputProps = {
  id?: string
  className?: string
} & React.InputHTMLAttributes<HTMLLabelElement>

export const SearchInput: React.FC<SearchInputProps> = (props) => {
  const { id, className, ...rest } = props

  return (
    <label
      className={clsx(
        `group inline-grid grid-cols-[auto_18px] items-center gap-2 rounded-full backdrop-blur-2xl
        bg-white px-5 py-3 font-text dark:bg-xzinc-800 dark:has-focus:bg-xzinc-800/80`,
        className,
      )}
      {...rest}
    >
      <input
        id={id}
        type="text"
        placeholder="Search"
        className="w-full placeholder:text-white/40 focus:outline-none"
      />
      <SearchIcon data-slot="icon" className="group-has-focus:text-white/40" />
    </label>
  )
}
