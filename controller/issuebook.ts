import { Request,Response } from "express";
import { inv } from "../mgmt";
import { us } from "../mgmt";

const issuebook = async (req: Request, res: Response) => {
    try{
        console.log(req.body);
        const {obj}  = req.body;
        console.log(obj);
        const b = await inv.findOne({bid:obj.bid});
        console.log(b);
      if(b!=null)
      {
        console.log("yes");
      const result = await inv.updateMany({bid:b.bid}, { $set: {availability:"no"} });
      console.log("yes2");
      const o = await us.insertMany({bid:b.bid,uid:obj.uid});
      console.log("yes3");
      res.status(200).json({message:'book issued',b});
      }
      else{
        res.status(201).json({message:'book not issued',b});
      }
    }
    catch{
        res.status(500).json({ message: 'Internal server error' });
    }
}

export default issuebook;