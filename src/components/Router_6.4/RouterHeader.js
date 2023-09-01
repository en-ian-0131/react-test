import { Link, Outlet } from 'react-router-dom'
function RouterHeader() {
  return (
    <>
      <div className="navHeader">
        <Link to="/">
          <button className="home">Home</button>
        </Link>
        <span className="separate">|</span>
        <Link to="/products">
          <button className="products">Products</button>
        </Link>
        {/* <span className="separate">|</span>
        <Link to="/search">
          <button className="search">Search</button>
        </Link> */}
      </div>
      <Outlet />
    </>
  )
}

export default RouterHeader
