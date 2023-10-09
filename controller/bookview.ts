import { Request,Response } from "express";
import { inv } from "../mgmt";


const bookview = async (req: Request, res: Response) => 
{
    try {
        // const sig  = req.body;
        console.log("yes2");
        const documents = (await inv.find()).toString();
        console.log("into the records");
        console.log(documents);
        if(documents!=null)
        {
            res.status(200).json({ message: 'Books found',documents});
        }
        else{
            res.status(201).json({ message: 'Books not found'});
        }
    }
    catch{
        res.status(500).json({ message: 'Internal server error' });
    }
}
export default bookview;