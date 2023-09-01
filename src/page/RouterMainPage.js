import RouterHeader from '../components/Router_passTime/RouterHeader'
import { Routes, Route, useRoutes } from 'react-router-dom'
// import RouterProducts from '../components/Router_passTime/RouterProducts'
// import RouterHome from '../components/Router_passTime/RouterHome'
// import RouterProduct from '../components/Router_passTime/RouterProduct'
// import RouterFeatures from '../components/Router_passTime/RouterFeatures'
// import RouterProductsLayOut from '../components/Router_passTime/RouterProductsLayOut'
// import RouterSearch from '../components/Router_passTime/RouterSearch'
// import RouterKeyWord from '../components/Router_passTime/RouterKeyword'

// useRoutes寫法-4
import RoutesManager from '../components/Router_passTime/RouteManager'

function RouterMainPage() {
  // useRoutes寫法-2
  // const Routes = [
  //   { path: '/', element: <RouterHome /> },
  //   {
  //     path: '/products',
  //     element: <RouterProductsLayOut />,
  //     children: [
  //       {
  //         path: '',
  //         element: <RouterProducts />,
  //       },
  //       {
  //         path: ':id',
  //         element: <RouterProduct />,
  //       },
  //       {
  //         path: 'features',
  //         element: <RouterFeatures />,
  //       },
  //     ],
  //   },
  //   {
  //     path: '/search',
  //     element: <RouterSearch />,
  //     children: [
  //       {
  //         path: ':key/:sec',
  //         element: <RouterKeyWord />,
  //       },
  //     ],
  //   },
  // ]

  // useRoutes寫法-3
  // useRoutes寫法-4
  const useRouting = useRoutes(RoutesManager)
  return (
    <div className="container header">
      <RouterHeader />

      {/* 一般寫法 */}
      {/* <Routes>
          <Route path="/products" element={<RouterProducts />} />
          <Route path="/products/:id" element={<RouterProduct />} />
          <Route path="/features" element={<RouterFeatures />} />
        </Routes> */}

      {/* 巢狀寫法 index */}
      {/* <Routes>
        <Route path="/" element={<RouterHome />} />
        <Route path="/products">
          <Route index element={<RouterProducts />} />
          <Route path=":id" element={<RouterProduct />} />
          <Route path="features" element={<RouterFeatures />} />
        </Route>
      </Routes> */}

      {/* 巢狀寫法 Oulet */}
      {/* <Routes>
        <Route path="/" element={<RouterHome />} />
        <Route path="/products" element={<RouterProductsLayOut />}>
          <Route index element={<RouterProducts />} />
          <Route path=":id" element={<RouterProduct />} />
          <Route path="features" element={<RouterFeatures />} />
        </Route>
        <Route path="/search" element={<RouterSearch />}>
          <Route path=":key/:sec" element={<RouterKeyWord />} />
        </Route>
      </Routes> */}

      {/* useRoutes寫法-1 */}
      {useRouting}
    </div>
  )
}

export default RouterMainPage
