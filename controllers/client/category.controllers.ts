import { Request ,Response } from "express";
import Category from "../../models/category.model";

// [GET] /categories 
export const index = async(req :Request ,res: Response) =>{
  // SELECT * from  Category where deleted =false and status="active"
  const categories = await Category.findAll({
    where:{
      deleted:false,
      status:"active"
    },
    raw:true
  });
  console.log(categories)
  res.render("client/pages/categories/index.pug ",{
    pageTitle:"danh mục tour",
    categories :categories
  })
}