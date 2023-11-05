import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <div className="personal-data">
        <img src="" alt="" />
        <p>Bem vindo,</p>
        <span>Lucas Ricci</span>
      </div>
      <span>Sair</span>
    </Container>
  );
}