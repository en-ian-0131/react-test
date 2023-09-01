import { useParams } from 'react-router-dom'

function RouterProduct() {
  const { id } = useParams()
  return <div className="product">Product {id}</div>
}

export default RouterProduct
