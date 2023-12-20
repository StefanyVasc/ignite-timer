import { HeaderContainer } from './styles'
import logoIgnite from '../../assets/logo-ignite.svg'
import { Scroll, Timer } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/">
          <div title="Timer">
            <Timer size={24} />
          </div>
        </NavLink>
        <NavLink to="/history">
          <div title="History">
            <Scroll size={24} />
          </div>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
