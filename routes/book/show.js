module.exports = function (app) {
  app.get("/books", (_, res) => {
    res.send({
      items: ["book 1", "book 2", "book 3", "book 4", "book 5"],
    });
  });
};
