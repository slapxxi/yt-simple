import ChevronDownIcon from '~/assets/chevron-down-icon.svg?react'
import FavoriteIcon from '~/assets/favorite-icon.svg?react'
import GamesIcon from '~/assets/games-icon.svg?react'
import HistoryIcon from '~/assets/history-icon.svg?react'
import HomeIcon from '~/assets/home-icon.svg?react'
import LibraryIcon from '~/assets/library-icon.svg?react'
import LikeIcon from '~/assets/like-icon.svg?react'
import MusicIcon from '~/assets/music-icon.svg?react'
import SubscriptionsIcon from '~/assets/subscriptions-icon.svg?react'
import TrendingIcon from '~/assets/trending-icon.svg?react'
import WatchLaterIcon from '~/assets/watch-later-icon.svg?react'

const config = {
  nav: [
    { Icon: HomeIcon, label: 'Home' },
    { Icon: TrendingIcon, label: 'Trending' },
    { Icon: SubscriptionsIcon, label: 'Subscriptions' },
    { Icon: LibraryIcon, label: 'Library' },
    { Icon: HistoryIcon, label: 'History' },
    { Icon: WatchLaterIcon, label: 'Watch Later' },
    { Icon: FavoriteIcon, label: 'Favorites' },
    { Icon: LikeIcon, label: 'Likes' },
    { Icon: MusicIcon, label: 'Music' },
    { Icon: GamesIcon, label: 'Games' },
    { Icon: ChevronDownIcon, label: 'Show More' },
  ],
}

export default config
