import {Router} from "express"

const router : Router = Router()

import * as controller from "../../controllers/client/tour.controllers"

router.get("/",controller.index)

export const tourRoutes : Router = router