import { Link, Outlet } from 'react-router-dom'

function RouterProductsLayOut() {
  return (
    <>
      <div className="products">
        <span>
          <Link to="/products/1">Product 1</Link>
        </span>
        |
        <span>
          <Link to="/products/2">Product 2</Link>
        </span>
        |
        <span>
          <Link to="/products/3">Product 3</Link>
        </span>
        |
        <span>
          <Link to="/products/4">Product 4</Link>
        </span>
        |
        <span>
          <Link to="/products/features">features</Link>
        </span>
      </div>
      <Outlet />
    </>
  )
}

export default RouterProductsLayOut
