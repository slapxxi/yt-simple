import clsx from 'clsx'

type AvatarProps = {
  src: string
} & React.ComponentPropsWithoutRef<'img'>

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { src, className, ...rest } = props
  return (
    <img
      src={src}
      alt=""
      className={clsx('rounded-full', className)}
      {...rest}
    />
  )
}
