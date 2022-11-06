const passport = require("passport");
const router = require("express").Router();

// @desc  Auth with google
// @route GET /auth/google

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// @desc  Auth with google callback
// @route GET /auth/google/callback

router.get(
	"/google/callback",
	passport.authenticate("google", { failureRedirect: "/" }),
	(req, res) => {
		res.redirect("/dashboard");
	}
);

// @desc  Logout
// @route GET /auth/logout

router.get("/logout", (req, res, next) => {
	req.logOut((err) => {
		if (err) return next(err);
		res.redirect("/");
	});
});

module.exports = router;
