import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      const client = await clientPromise;
      const db = client.db("message");
      const result = await db.collection("messages").insertOne({
        name,
        email,
        message,
        date: new Date(),
      });

      res.status(200).json({ success: true, message: "Message stored" });
    } catch (error) {
      console.error("Error saving message:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
