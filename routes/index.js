const router = require("express").Router();

// @desc  Login/landing page
// @route GET /

router.get("/", (req, res) => {
	res.render("login");
});

// @desc  Dashboard
// @route GET /dashboard

router.get("/dashboard", (req, res) => {
	res.render("dashboard");
});

module.exports = router;