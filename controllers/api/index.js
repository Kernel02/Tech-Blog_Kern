const router = require("express").Router();
const userRoutes = require("./userRoutes");
const blogpostRoutes = require("./blogpostRoutes");

router.use("/users", userRoutes);
router.use("/blogPosts", blogpostRoutes);

module.exports = router;
