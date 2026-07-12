type AvatarProps = {
  src: string
}

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { src } = props
  return <img src={src} alt="" className="rounded-full" />
}
