import { Link, NavLink } from 'react-router-dom'
function RouterHeader() {
  return (
    <>
      {/* <div className="navHeader">
        <Link to="/">
          <button className="home">Home</button>
        </Link>
        <span className="separate">|</span>
        <Link to="/products">
          <button className="products">Products</button>
        </Link>
      </div> */}
      <div className="navHeader">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <button className="home">Home</button>
        </NavLink>
        <span className="separate">|</span>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <button className="products">Products</button>
        </NavLink>
        <span className="separate">|</span>
        <NavLink
          to="/search"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <button className="search">Search</button>
        </NavLink>
      </div>
    </>
  )
}

export default RouterHeader
