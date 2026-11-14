import { NAVIGATION } from '../constants';

export function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return <ul>{NAVIGATION.map(([label, href]) => <li key={label}><a href={href} onClick={onNavigate}>{label}</a></li>)}</ul>;
}
