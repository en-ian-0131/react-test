// import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

function RouterProduct() {
  // const { id } = useParams()
  const id = useLoaderData()
  console.log('id:', id)

  return (
    <>
      <div className="product">Product {id}</div>
    </>
  )
}

export default RouterProduct
