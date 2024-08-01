import { FilterLead } from '../FilterLead';
import Logo from './../../assets/logo.svg';
import IconPlus from './../../assets/plus.svg';
import * as C from './styles';

export const Header = () => {
  return (
    <C.Container>
      <Logo />

      <div className="wrapper">
        <h2>Consulta de Leads</h2>
        <button className="button-newlead">
          Novo Lead <IconPlus />
        </button>
      </div>

      <FilterLead />
    </C.Container>
  );
};
