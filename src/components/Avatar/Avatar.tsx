import { selectIsLightMode } from 'store/app/selectors'
import { selectResume } from 'store/resume/selectors'
import { useAppSelector } from 'hooks/useAppSelector'
import './avatar.css'

export default function Avatar() {
  const { fullName, primaryImageUrl } = useAppSelector(selectResume)
  const isLightMode = useAppSelector(selectIsLightMode)

  return (
    <div className={`avatar-wrapper ${isLightMode ? 'shadow' : 'border'}`}>
      <img src={primaryImageUrl} alt="avatar" />
      <h3 className="full-name">{fullName}</h3>
    </div>
  )
}
