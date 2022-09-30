import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    const { id } = req.query
    const client = await clientPromise;
    const db = client.db("Theater");
    
    const posts = await db.collection("movies_shows").findOne({ _id: ObjectId(id) })
    res.status(200).json(posts);
    
}