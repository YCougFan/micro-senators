const { send } = require("micro");
const { router, get } = require("microrouter");

const senators = require("../data/senators");

const home = (req, res) => send(res, 200, senators);

const republicans = (req, res) => send(res, 200, senators.filter(Senator => Senator.party === "Republican"));

const democrats = (req, res) => send(res, 200, senators.filter(Senator => Senator.party === "Democrat"));

const independents = (req, res) => send(res, 200, senators.filter(Senator => Senator.party === "Independent"));

const male = (req, res) => send(res, 200, senators.filter(Senator => Senator.person.gender === "male"));

const female = (req, res) => send(res, 200, senators.filter(Senator => Senator.person.gender === "female"));

const byState = (req, res) => send(res, 200, senators.filter(Senator => Senator.state === req.params.state));

// add search by senator ranking

module.exports = router(get("/", home),
  get("/republicans", republicans),
  get("/democrats", democrats),
  get("/Independents", independents),
  get("/male", male),
  get("/female", female),
  get("/state/:state", byState));