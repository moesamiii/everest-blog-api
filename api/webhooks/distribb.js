export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") return res.status(200).end();

  try {
    const article = req.body;
    console.log("Distribb payload:", JSON.stringify(article));

    const response = await fetch(
      "https://bqbstpmltgccrhmtjufk.supabase.co/rest/v1/articles",
      {
        method: "POST",
        headers: {
          apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxYnN0cG1sdGdjY3JobXRqdWZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc3OTcyMTYsImV4cCI6MjA5MzM3MzIxNn0.qpbVtz4ssj1jaFI2cCzssge7jGSOFJb9LG2L6bmW47k",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxYnN0cG1sdGdjY3JobXRqdWZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc3OTcyMTYsImV4cCI6MjA5MzM3MzIxNn0.qpbVtz4ssj1jaFI2cCzssge7jGSOFJb9LG2L6bmW47k",
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          title: article.title || article.Title || article.name || null,
          content: article.content || article.Content || article.body || null,
          slug: article.slug || article.Slug || null,
          featured_image: article.featured_image || article.image || article.featuredImage || null,
        }),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      return res.status(500).json({ error: err });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
