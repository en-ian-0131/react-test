import RouterHome from './RouterHome'
import RouterProductsLayOut from './RouterProductsLayOut'
import RouterProducts from './RouterProducts'
import RouterProduct from './RouterProduct'
import RouterFeatures from './RouterFeatures'
import RouterSearch from './RouterSearch'
import RouterKeyWord from './RouterKeyword'

const RoutesManager = [
  { path: '/', element: <RouterHome /> },
  {
    path: '/products',
    element: <RouterProductsLayOut />,
    children: [
      {
        path: '',
        element: <RouterProducts />,
      },
      {
        path: ':id',
        element: <RouterProduct />,
      },
      {
        path: 'features',
        element: <RouterFeatures />,
      },
    ],
  },
  {
    path: '/search',
    element: <RouterSearch />,
    children: [
      {
        path: ':key/:sec',
        element: <RouterKeyWord />,
      },
    ],
  },
]

export default RoutesManager
