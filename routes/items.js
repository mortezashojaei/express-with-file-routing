module.exports = function (app) {
  app.get("/items", (_, res) => {
    res.send({
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    });
  });
};
