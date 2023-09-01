import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import RouterHeader from '../components/Router_6.4/RouterHeader'
import RouterHome from '../components/Router_6.4/RouterHome'
import RouterProducts from '../components/Router_6.4/RouterProducts'
import RouterProductsLayOut from '../components/Router_6.4/RouterProductsLayOut'
import RouterProduct from '../components/Router_6.4/RouterProduct'
import RouterNotFound from '../components/Router_6.4/RouterNotFound'

//api
//https://dummyjson.com/products?limit=5

function NewRouterPage() {
  //plain object寫法
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RouterHeader />,
      children: [
        { path: '', element: <RouterHome /> },
        {
          path: '/products',
          element: <RouterProductsLayOut />,
          children: [
            { path: '', element: <RouterProducts /> },
            {
              path: ':id',
              element: <RouterProduct />,
              loader: ({ params }) => {
                return params.id
              },
            },
          ],
        },
      ],
    },
    { path: '*', element: <RouterNotFound /> },
  ])

  //Nested Router寫法
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<RouterHeader />}>
  //       <Route index element={<RouterHome />} />
  //       <Route path="/products" element={<RouterProductsLayOut />}>
  //         <Route index element={<RouterProducts />} />
  //         <Route
  //           path=":id"
  //           element={<RouterProduct />}
  //           loader={({ params }) => {
  //             return params.id
  //           }}
  //         />
  //       </Route>
  //     </Route>
  //   )
  // )

  return (
    <div className="container header">
      <RouterProvider router={router} />
    </div>
  )
}

export default NewRouterPage
