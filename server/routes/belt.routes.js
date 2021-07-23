const beltController = require("../controllers/belt.controller")

module.exports = app => {
    app.get("/api/test",beltController.test)
    app.get("/api/belt",beltController.getAll)
    app.post("/api/belt",beltController.create)
    app.get("/api/belt/:id",beltController.getOne)
    app.put("/api/belt/:id",beltController.update)
    app.delete("/api/belt/:id",beltController.deleteOne)
}