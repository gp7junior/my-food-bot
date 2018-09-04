function findRestaurants(req, res) {
  console.log("[POST] /test");
  res.json({
    replies: [
      { type: 'text', content: `I still have to implement the skill find restaurant` },
    ],
  });
}
