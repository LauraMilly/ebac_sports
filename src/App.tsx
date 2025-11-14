import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { useGetProductsQuery } from './store/api'

function App() {
  const { data: produtos = [], isLoading, error } = useGetProductsQuery()

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />

        {isLoading && <p>Carregando produtos...</p>}
        {error && <p>Erro ao carregar produtos</p>}

        {!isLoading && !error && <Produtos produtos={produtos} />}
      </div>
    </>
  )
}

export default App
