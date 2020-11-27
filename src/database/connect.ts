import {createConnection} from "typeorm";

createConnection().then(() => console.log('Succefully connected with database'));
