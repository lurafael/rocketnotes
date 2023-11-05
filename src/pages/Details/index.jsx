import { Container } from "./styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"

export function Details() {
  return (
    <Container>
      <h1>Hello World!</h1>
      <Header />
      <Button title="Voltar" />
    </Container>
  )
}
