import { Container, Side,Content, Search } from "./styles"
import { Logo } from "../../components/Logo"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { FiSearch } from "react-icons/fi"

export function Home(){
    return(
        <Container>
<Logo/>

<Side>
<div className="menu">
<ul>
<li>Todos</li>
<li>VolksWagem</li>
<li>Chevrolet</li>
<li>Ford</li>
<li>Fiat</li>
</ul>

</div>

<Button name="Adicionar Carro"/>
</Side>
<Header/>

<Search>
<Input placeholder="Pesquisar pelo título" icon={FiSearch}/>

</Search>

<Content className="content">


</Content>
        </Container>



    )
}