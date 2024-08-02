import * as C from './styles';
import Input from '../Input';

export const FilterLead = () => {
  return (
    <C.Card>
      <C.Wrapper>
        <Input
          label="CPF"
          type="text"
          mask="999.999.999-99"
          placeholder="Digite o CPF do cliente"
        />
        <Input
          label="Nome do cliente"
          type="text"
          placeholder="Digite o nome do cliente"
        />
      </C.Wrapper>

      <C.WrapperEnd>
        <C.ButtonClear>Limpar tudo</C.ButtonClear>
        <C.ButtonFilter>Filtrar</C.ButtonFilter>
      </C.WrapperEnd>
    </C.Card>
  );
};
