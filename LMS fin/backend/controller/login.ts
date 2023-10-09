import { Request,Response } from "express";
import { us} from "../mgmt";


const login = async (req: Request, res: Response) => {
    try {
      const { role, name, pw } = req.body;
  console.log(req.body)
      // Search for a user with the provided username and password
      const user = await us.findOne({ uname:name, pwd:pw });
      if (user) {
        // User with matching credentials found
        res.status(200).json({ message: 'Login successful',role:user.role });
      } else {
        // No user found with matching credentials
        res.status(401).json({ message: 'Login failed' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  export default login;