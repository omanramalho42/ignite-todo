import React from 'react'

import { 
  Container,
  Image 
} from './styles'

import Logo from '../../assets/rocket.png';
import Icon from '../../assets/todo.png';

const Header:React.FC = () => {
  return (
    <Container>
      <Image size='small' src={Logo} />
      <Image size='medium' src={Icon} />
    </Container>
  )
}

export default Header