import { Request,Response } from "express";
import { inv } from "../mgmt";
const bookadd = async (req: Request, res: Response) => {
    try {
      //console.log(req.body)
      const obj  = req.body;
      //console.log(obj);
      const x=obj.bid;
      const b = await inv.findOne({bid:x});
      if(b==null)
      {
      const result = await inv.insertMany({bid:obj.bid,bname:obj.bname,author:obj.author,location:obj.location,available:obj.available});
      res.status(200).json({message:'book added',b})
      }
      else
      {
        res.status(201).json({message:'book not added',b})
      }
    }
    catch{
        res.status(500).json({ message: 'Internal server error' });
    }
};
export default bookadd;