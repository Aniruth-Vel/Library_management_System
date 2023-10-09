import { Request,Response } from "express";
import { inv } from "../mgmt";


const booksearch = async (req: Request, res: Response) => {
    try {
      const {ele}  = req.body;
      console.log(ele);
      const b = await inv.findOne({ bname:ele});
      console.log(b);
      if (b) {
        if(b.availability=="yes")
        {
          res.status(200).json({ message: 'Book found',ele:b.location});
        }
        else
        {
          res.status(201).json({ message: 'Book unavailable currently'});
        }
      }
      else 
      {
        res.status(401).json({ message: 'No such book' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  export default booksearch;