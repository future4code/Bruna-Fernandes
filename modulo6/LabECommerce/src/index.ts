import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from 'net';
import { creatUser } from './endpoints/createUsers';
import { selectUsers } from './endpoints/selectUsers';
import { creatProduct } from './endpoints/createProducts';
import { selectProducts } from './endpoints/selectProducts';
import { creatPurchase } from './endpoints/creatpurchases';
import { selectPurchases } from './endpoints/selectPurchases';


const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/users", creatUser)
app.get("/users", selectUsers)
app.get("/users/:id", selectUsers)


app.post("/products", creatProduct)
app.get("/products", selectProducts)

app.post("/purchases", creatPurchase)
app.get("/users/:user_id/purchases", selectPurchases)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});