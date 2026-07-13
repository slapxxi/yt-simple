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
import user2Image from '~/assets/user-2.jpg'
import user3Image from '~/assets/user-3.jpg'
import user4Image from '~/assets/user-4.jpg'
import user5Image from '~/assets/user-5.jpg'
import user6Image from '~/assets/user-6.jpg'
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
  subscriptions: [
    { img: user2Image, label: 'Gussie Singleton' },
    { img: user3Image, label: 'Nora Francis' },
    { img: user4Image, label: 'Belle Briggs' },
    { img: user5Image, label: 'Eunice Cortez' },
    { img: user5Image, label: 'Emma Hanson' },
    { img: user6Image, label: 'Leah Berry' },
  ],
}

export default config
