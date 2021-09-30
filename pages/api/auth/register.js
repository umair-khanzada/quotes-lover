import { MongoClient } from 'mongodb';

// 
async function handler(req, res) {
    console.log("HANDLER REQ", req.method)
    const dbName = "quotes-app";
    let client = null;
    try {
        if (req.method === 'POST') {
            const data = req.body;
            client = await MongoClient.connect(process.env.CONNECTION)
            // console.log("server running")
            const db = client.db(dbName);
            const userRegistrationCollection = db.collection('users');
            const result = await userRegistrationCollection.insertOne(data);
            // client.close();
            res.status(201).json({
                message: 'user registered succesfully!'
            });
        }
    }
    catch (error) {
        // console.log("error", error)
    } finally {
        client.close();
    }
}

export default handler;