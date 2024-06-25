const asyncHandler = require("express-async-handler")
const User = require("../models/User")

exports.addUser = asyncHandler(async (req, res) => {
    const { email } = req.params
    const result = await User.findOne({ email })

    if (result) {
        return res.status(401).json({ message: "Email Already register" })
    }

    await User.create(req.body)
    res.json({ message: "User Add Success" })
})
exports.getAllUser = asyncHandler(async (req, res) => {
    const result = await User.find()
    res.json({ message: "User Fetch Success", result })
})
exports.getUserDetails = asyncHandler(async (req, res) => {
    const { userId } = req.params
    const result = await User.findById(userId)
    res.json({ message: "User Details Fetch Success", result })
})
exports.updateUser = asyncHandler(async (req, res) => {
    const { userId } = req.params
    await User.findByIdAndUpdate(userId, req.body)
    res.json({ message: "User Update Success" })
})
exports.deleteUser = asyncHandler(async (req, res) => {
    const { userId } = req.params
    await User.findByIdAndDelete(userId)
    res.json({ message: "User Delete Success" })
})

