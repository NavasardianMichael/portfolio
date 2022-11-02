import avatarImg from 'assets/images/fake-avatar.jpeg';
import { useThemeMode } from 'hooks/useThemeMode';
import { useTranslations } from 'hooks/useTranslations';
import './avatar.css';

export default function Avatar() {
  const mode = useThemeMode();
  const { fullName, avatar } = useTranslations();

  return (
    <div className={`avatar-wrapper ${mode === 'light' ? 'shadow' : 'border'}`}>
      <img src={avatarImg} alt={avatar} title={avatar} />
      <h3 className="full-name">{fullName}</h3>
    </div>
  );
}
