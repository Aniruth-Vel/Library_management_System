import { Request,Response } from "express";
import { inv } from "../mgmt";

const bookupd = async (req: Request, res: Response) => {
    try {
      //console.log(req.body)
      const obj  = req.body;
      const x=obj.bid;
      //console.log(x);
      const b = await inv.findOne({bid:x});
      //console.log(b);
      if(b!=null)
      {
      const result = await inv.updateMany({bid:x}, { $set: {bname:obj.bname,author:obj.author,location:obj.location,availability:obj.availability} });
      res.status(200).json({message:'book updated',b});
      }
      else{
        res.status(201).json({message:'book not updated',b});
      }
    }
    catch{
        res.status(500).json({ message: 'Internal server error' });
    }
};

export default bookupd;