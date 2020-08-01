module.exports = function (app) {
  app.get("/test", (_, res) => {
    res.send({
      message: "hello i am test get api call",
    });
  });
};
