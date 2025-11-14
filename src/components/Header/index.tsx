import * as S from './styles'
import { useAppSelector } from '../../store/hooks'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { Produto } from '../../types'
import { RootState } from '../../store'

const Header = () => {
  const itensNoCarrinho = useAppSelector((state: RootState) => state.cart.items)

  const valorTotal = itensNoCarrinho.reduce(
    (acc: number, item: Produto) => acc + item.preco,
    0
  )

  return (
    <S.Header>
      <h1>EBAC Sports</h1>

      <div>
        <img src={cesta} />
        <span>
          {itensNoCarrinho.length} itens, total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
