import mongoose, { Schema, Document, Model } from 'mongoose';

export interface Inventory extends Document {
    bid: number;
    bname: string;
    author: string;
    location: string;
    availability: string;
}

export interface Users extends Document {
  uid: string;
  uname: string;
  bid: number;
  pwd: string;
  role: string
}

const inventorySchema: Schema = new Schema({
    bid: Number,
    bname: String,
    author: String,
    location: String,
    availability: String
});
export const inv: Model<Inventory> = mongoose.model<Inventory>('inv', inventorySchema,'inventory');

const usersSchema: Schema = new Schema({
    uid: { 
        type: String,
         required : [true,"user id should be not empty"]
        },
    uname: { 
        type: String,
         required : [true,"username should be not empty"]
        },
    bid: { 
        type: Number,
         required : [true,"book id should be not empty"]
        },
    pwd:
    {
        type: String,
        required : [true,"password should be not empty"]
    },
    role:
    {
        type: String,
        required : [true,"role should not be empty"]
    }

});
export const us: Model<Users> = mongoose.model<Users>('us', usersSchema,'users');

