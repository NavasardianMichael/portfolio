import { selectSocials } from 'store/resume/selectors'
import { useAppSelector } from 'hooks/useAppSelector'
import { DOWNLOADABLE_SOCIALS, ICONS_BY_SOCIAL_NAME } from 'helpers/constants/socials'
import commonStyles from 'styles/commons.module.css'
import styles from './socials.module.css'

export default function Socials() {
  const socials = useAppSelector(selectSocials)
  return (
    <div className={`${styles['socials']} ${commonStyles['hoverable']}`}>
      {socials.map(({ name, assetUrl }) => {
        const Icon = ICONS_BY_SOCIAL_NAME[name as keyof typeof ICONS_BY_SOCIAL_NAME]
        if (!Icon) return null
        return (
          <a key={name} href={assetUrl} title={name} download={!!DOWNLOADABLE_SOCIALS.includes(name)} target="_blank">
            <Icon />
          </a>
        )
      })}
    </div>
  )
}
