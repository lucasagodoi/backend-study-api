const express = require("express");
const app = express();

app.use(express.json());

let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

app.get("/", (req, res) => {
  res.json({ message: "API is running ✅" });
});

app.get("/items", (req, res) => {
  res.json(items);
});

app.post("/items", (req, res) => {
  const { name } = req.body;
  const newItem = { id: Date.now(), name: name || "Unnamed item" };
  items.push(newItem);
  res.status(201).json(newItem);
});

app.delete("/items/:id", (req, res) => {
  const id = Number(req.params.id);
  items = items.filter((item) => item.id !== id);
  res.json({ message: "Deleted ✅" });
});

const PORT = 3000;
app.listen(PORT, () => console.log("Server running on port 3000"));
