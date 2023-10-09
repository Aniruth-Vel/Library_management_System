import { Request,Response } from "express";
import { inv } from "../mgmt";


const search = async (req: Request, res: Response) => {
    try {
      const {ele}  = req.body;
      //console.log(ele)
      // Search for a user with the provided username and password
      const b = await inv.findOne({ bname:ele});
      if (b) {
        if(b.availability=="yes")
        {
          // User with matching credentials found
          //console.log("yes2");
          res.status(200).json({ message: 'Book found',ele:b.location});
        }
        else
        {
          res.status(201).json({ message: 'Book unavailable currently'});
        }
      }
      else 
      {
        // No user found with matching credentials
        res.status(401).json({ message: 'No such book' });
      }
    } catch (error) {
      //console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  export default search;