import { Logo } from '../Logo';
import * as C from './styles';

export const Header = () => {
  return (
    <C.Container>
      <Logo />
      <div className="wrapper">
        <h2>Consulta de Leads</h2>
        <button className="button-newlead">
          Novo Lead{' '}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              fill="#198CFF"
            />
          </svg>
        </button>
      </div>
    </C.Container>
  );
};
