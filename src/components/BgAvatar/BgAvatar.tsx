import { FC } from 'react'
import { selectResume } from 'store/resume/selectors'
import { useAppSelector } from 'hooks/useAppSelector'
import './bgAvatar.css'

const BgAvatar: FC = () => {
  const { secondaryImageUrl } = useAppSelector(selectResume)
  return (
    <div className="bgAvatar">
      <img src={secondaryImageUrl} alt="avatar" />
    </div>
  )
}

export default BgAvatar
