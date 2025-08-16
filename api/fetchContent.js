import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const response = await fetch("https://en.wikipedia.org/wiki/Mathematics");
    const body = await response.text();
    res.status(200).send(body);
  } catch (err) {
    res.status(500).send("Error fetching content");
  }
}
