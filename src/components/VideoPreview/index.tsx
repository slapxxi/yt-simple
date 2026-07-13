import { Link } from 'react-router'
import DotIcon from '~/assets/dot-icon.svg?react'

type VideoPreviewProps = {
  duration: string
  author: string
  img: string
  title: string
  views: string
  published: string
}

export const VideoPreview: React.FC<VideoPreviewProps> = (props) => {
  const { duration, author, img, title, views, published } = props

  return (
    <Link className="grid grid-rows-[150px] gap-2.5" to={'/video/1'}>
      <img
        src={img}
        alt=""
        className="col-1 row-1 h-full w-full rounded-[14px] object-cover"
      />

      <div className="col-1 row-1 m-2 place-self-end rounded-full bg-black/50 p-1 px-2 text-fluid-sm text-white">
        {duration}
      </div>

      <h3 className="title text-fluid-base">{title}</h3>

      <div className="grid grid-cols-[minmax(min-content,max-content)_6px_1fr_auto] gap-1 items-center text-fluid-sm dark:text-white/40">
        <div>{views} views</div>
        <DotIcon />
        <div>{published}</div>
        <div>{author}</div>
      </div>
    </Link>
  )
}
