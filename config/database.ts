import {Sequelize} from "sequelize"
import dotenv from "dotenv"

dotenv.config();
const sequelize = new Sequelize(
process.env.DATABASE_NAME, //tên database 
process.env.DATABASE_USERNAME,// user name để đăng nhập
process.env.DATABASE_PASSWORD,//pass word
  {
    host: process.env.DATABASE_HOST, // link hosting
    dialect: 'mysql'
  }
);


sequelize.authenticate().then(() => {
   console.log('Connect success');
}).catch((error) => {
   console.error('connect erorr ', error);
});

export default sequelize