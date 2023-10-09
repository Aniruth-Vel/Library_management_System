import { Request,Response } from "express";
import { inv } from "../mgmt";
import { us } from "../mgmt";

const pending = async (req: Request, res: Response) => {
    try {
      //console.log(req.body)
      const {usid}  = req.body;
      console.log(usid);
      const b = await us.findOne({ uid:usid });
      console.log("yes");
      if(b==null)
      {
        res.status(201).json({message:'pending clear',b})
      }
      else
      {
        const x =b.bid;
        let c = await inv.findOne({bid:x});
        res.status(200).json({ message: 'Book found',bname:c.bname});
      }
    }
    catch (error) {
        //console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
};
export default pending;