const express = require("express")
const router = express.Router()
const {addBookmark,updateBookmark,getBookmarks,deleteBookmark} = require("../controllers/bookmark")

router.route("/").get(getBookmarks).post(addBookmark)
router.route("/:id").put(updateBookmark).delete(deleteBookmark)

module.exports = router