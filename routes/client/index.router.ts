import {Express} from "express"
import { tourRoutes } from "./tour.router"
import { categoryRoutes } from "./category.router"

const clientRoutes = (app:Express):void =>{

  app.use(`/tours`,tourRoutes)

  app.use("/category",categoryRoutes)

}
export default clientRoutes