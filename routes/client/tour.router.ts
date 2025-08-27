import {Router} from "express"

const route : Router = Router()

import * as controller from "../../controllers/client/tour.controllers"

route.get("/",controller.index)

export const tourRoutes : Router = route