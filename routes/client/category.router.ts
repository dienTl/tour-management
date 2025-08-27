import { Router } from "express";

const router : Router = Router()
import * as controller from "../../controllers/client/category.controllers"

router.get("category" , controller.index)

export const categoryRoutes :Router = router