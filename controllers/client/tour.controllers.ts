import Tour from "../../models/tour.model";
import { Request, Response} from "express"

// [GET] /tours/
export const index =  async (req:Request,res:Response) =>{
  // SELECT * from  tours where deleted =false and status="active"
  const tours = await Tour.findAll({
    where:{
      deleted:false,
      status:"active"
    },
    raw:true
  });
  console.log(tours)
  res.render("client/pages/tours/index",{
    pageTitle:"đây là trang danh sách tour",
    tours: tours
  })
}