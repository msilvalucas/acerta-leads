import { useNavigate } from 'react-router-dom';
import Logo from './../../assets/logo.svg';
import IconPlus from './../../assets/plus.svg';
import * as C from './styles';

export const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register-lead');
  };

  return (
    <C.Container>
      <Logo />
      <C.Wrapper>
        <C.Title>Consulta de Leads</C.Title>
        <C.ButtonNewLead onClick={handleClick}>
          Novo Lead <IconPlus />
        </C.ButtonNewLead>
      </C.Wrapper>
    </C.Container>
  );
};
