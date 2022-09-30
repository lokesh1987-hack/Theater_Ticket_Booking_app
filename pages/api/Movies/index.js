import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Theater");
  
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let newPost = await db.collection("movies_shows").insertOne(bodyObject);
      res.status(200).json(newPost.ops[0]);
      break;
    case "GET":
      const posts = await db.collection("movies_shows").find({}).toArray();
      res.status(200).json(posts);
      break;    
  }
}