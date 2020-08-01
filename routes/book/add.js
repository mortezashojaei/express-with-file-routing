module.exports = function (app) {
  app.post("/books", (req, res) => {
    console.log(req.body);
    res.send({
      message: "book created successfully",
    });
  });
};
