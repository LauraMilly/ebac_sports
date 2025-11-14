import { Produto as ProdutoType } from '../../types'
import * as S from './styles'
import { useAppDispatch } from '../../store/hooks'
import { addItem } from '../../store/cartSlice'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor)

const Produto = ({ produto }: Props) => {
  const dispatch = useAppDispatch()

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>

      <S.Titulo>{produto.nome}</S.Titulo>

      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>

      <S.BtnComprar onClick={() => dispatch(addItem(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default Produto
