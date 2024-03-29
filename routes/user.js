const express = require("express");
const router = express.Router();
const {
    userById,
    read,
    publicRead,
    update,
    updateProfile,
    profilePicture,
    skills,
    interests,
    updateSkills,
    updateInterests,
    address,
    updateAddress,
    removeSkill,
    about,
    updateAbout
} = require("../controllers/user");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { skillById } = require("../controllers/skill");

router.get("/secret/:userId", requireSignin, isAuth, isAdmin, (req, res) => {
    res.json({
        user: req.profile
    })
})
router.get("/user/:userId", requireSignin, isAuth, read);
router.get("/user/public/:userId/:userId2", requireSignin, isAuth, publicRead)
router.put("/user/:userId", requireSignin, isAuth, update);
router.put("/user/update/:userId", requireSignin, isAuth, updateProfile);
router.get("/user/profilePicture/:userId", profilePicture);
router.get("/user/skills/:userId", requireSignin, skills)
router.put("/user/skills/:userId/:skillId", requireSignin, isAuth, updateSkills)
router.get("/user/interests/:userId", requireSignin, interests)
router.put("/user/interests/:userId", requireSignin, isAuth, updateInterests)
router.get("/user/address/:userId", requireSignin, isAuth, address);
router.put("/user/address/:userId", requireSignin, isAuth, updateAddress);
router.delete("/user/skills/:userId/:skillId", requireSignin, isAuth, removeSkill);
router.get("/user/about/:userId", requireSignin, about);
router.put("/user/about/:userId", requireSignin, isAuth, updateAbout)

router.param('userId', userById);
router.param('skillId', skillById);

module.exports = router;
