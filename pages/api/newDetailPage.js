import { MongoClient } from "mongodb";
async function handler(req,res) {
  if (req.method === "POST") {
    const Key=process.env.PASSWORD;
    const data = req.body;

    const client = await MongoClient.connect(
      
      `mongodb+srv://AliQans:${Key}@cluster0.r2ac1.mongodb.net/carX?retryWrites=true&w=majority`
    );
    const db = client.db();
    const carsCollection = db.collection("carX");

    const results = await carsCollection.insertOne(data);
    console.log(results);
    client.close();
    res.status(201).json({ message: "Car detail are inserted" });
  }
}
export default handler;
