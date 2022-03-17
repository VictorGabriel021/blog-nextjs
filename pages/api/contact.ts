import type { NextApiRequest, NextApiResponse } from "next";

import { MongoClient } from "mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    type Props = {
      id?: any;
      email: any;
      name: any;
      message: any;
    };

    // Strore it in a database
    let newMessage: Props = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://VictorGabriel021:VYcmnkv6yyvsqqo4@cluster0.f5euq.mongodb.net/myBlog?retryWrites=true&w=majority"
      );
    } catch (error: any) {
      res.status(500).json({ message: error.message });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }

    client.close();

    res.status(201).json({
      message: "Successfully stored message!",
      newMessage: newMessage,
    });
  }
};

export default handler;
