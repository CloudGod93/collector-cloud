import express from "express";
import TCGdex from "@tcgdex/sdk";

const app = express();
const port = 3001;

const tcgdex = new TCGdex("en");

app.get("/card/:id", async (req, res) => {
  try {
    const card = await tcgdex.fetch("cards", req.params.id);
    res.json(card);
  } catch (error) {
    res.status(404).json({ error: "Card not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
