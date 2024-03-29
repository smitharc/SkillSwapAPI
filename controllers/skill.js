const Skill = require("../models/skill");


exports.create = (req, res) => {
    const skill = new Skill(req.body);
    skill.save((error, data) => {
        if (error) {
            return res.status(400).json({ error })
        }
        res.json({ data });

    })
}

exports.skillById = (req, res, next, id) => {
    Skill.findById(id).exec((err, skill) => {
        if (err || !skill) {
            return res.status(400).json({
                error: "Skill does not exist"
            })
        }
        req.skill = skill;
        next();
    })
}

exports.read = (req, res) => {
    return res.json(req.skill);
}

exports.update = ((req, res) => {
    const skill = req.skill;
    skill.name = req.body.skill.toLowerCase();
    skill.save((error, data) => {
        if (error) {
            res.status(400).json({ error })
        }
        res.json(data)
    })
})

exports.remove = ((req, res) => {
    const skill = req.skill;
    skill.remove((err, result) => {
        if (err) {
            res.status(400).json({
                error: "Skill does not exist"
            })
        }
        res.json({
            message: "Skill has been deleted"
        })
    })
})

exports.list = ((req, res) => {
    Skill.find().exec((error, data) => {
        if (error) {
            res.status(400).json({ error })
        }
        res.json(data);
    })
})