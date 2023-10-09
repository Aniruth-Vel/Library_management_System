import {Router} from "express";
import login from "../controller/login";
import search from "../controller/search";
import pending from "../controller/pending";
import bookadd from "../controller/bookadd";
import bookupd from "../controller/bookupd";
import booksearch from "../controller/booksearch";
import bookview from "../controller/bookview";
import issuebook from "../controller/issuebook";
import bookret from "../controller/bookret";


const routes=Router();
routes.post('/login',login)
routes.post('/search',search)
routes.post('/pending',pending)
routes.post('/bookadd',bookadd)
routes.post('/bookupd',bookupd)
routes.post('/booksearch',booksearch)
routes.post('/bookview',bookview)
routes.post('/issuebook',issuebook)
routes.post('/bookret',bookret)
export default routes
