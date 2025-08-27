import {Router} from "express"
import express, {Express ,Request, Response} from "express"
import Tour from "../../models/tour.model";

const route : Router = Router()

route.get("/", async (req:Request,res:Response) =>{
  const tours = await Tour.findAll({
    raw:true
  });
  console.log(tours)
  res.render("client/pages/tours/index",{
    tours: tours
  })
})

export const tourRoutes : Router = route