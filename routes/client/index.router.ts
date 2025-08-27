import {Express} from "express"
import { tourRoutes } from "./tour.router"

const clientRoutes = (app:Express):void =>{
  app.use(`/tours`,tourRoutes)

}
export default clientRoutes