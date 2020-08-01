module.exports = function (app) {
  app.get("/test", (_, res) => {
    console.log(name, lastName);
    res.send({
      message: "hello i am test get api call",
    });
  });
};
