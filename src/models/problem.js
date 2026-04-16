const mongoose = require("mongoose")
const { TimeoutError, defineScript } = require("redis")
const {Schema} = mongoose

const problemSchema = new Schema({

    title : {
        type: String,
        required: true
    },
    defineScript : {
        type: String,
        required: true
    },
    difficulty : {
        type: String,
        enum: ["easy", "medium", "hard"]
    },
    tags : {
        type: String,
        enum: ["arrays", "strings", "linked-lists", "trees", "graphs", "dynamic-programming", "greedy-algorithms", "backtracking"],
        required: true
    },
    visibleTestCases : [
        {
        input : {
            type: String,
            required: true
        },
        output : {
            type: String,
            required: true
        },
        explanation : {
            type: String,
            required: true
        },
        }
    ],
    visibleTestCases : [
        {
        input : {
            type: String,
            required: true
        },
        output : {
            type: String,
            required: true
        },

        }
    ],
    startCode : [
        {
            language : {
                type: String,
                required: true
            },
            initialCode : {
                type: String,
                required: true
            }
        }
    ],
    problemCreator : {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    }

})

const Problem = mongoose.model("problem", problemSchema)

module.exports = Problem