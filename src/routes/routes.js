import combineRoutes from 'koa-combine-routers'

import demoRouter from './demoRouters'
import userRoutes from './user'

export default combineRoutes(
    demoRouter,
    userRoutes
)