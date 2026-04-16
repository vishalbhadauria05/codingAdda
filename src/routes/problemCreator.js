const express = require("express")
const { get } = require("mongoose")
const problemRouter = express.Router()
// problem Create
problemRouter.post("/create", problemCreate)

// problem fetch
problemRouter.get("/:id", problemFetch)
problemRouter.get("/", getAllProblem)

// problem update
problemRouter.patch("/:id", problemUpdate)

// problem delete
problemRouter.delete("/:id", problemDelete)

// problem solved
problemRouter.get("/user",solvedProblem)