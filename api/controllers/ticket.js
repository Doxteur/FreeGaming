const ticketServices = require('../services/ticket');

exports.addTicket = async (req, res) => {
  res.status(200).send(await ticketServices.addTicket(req.body.name, req.body.lastname, req.body.email, req.body.title, req.body.description));
};

exports.ticketWithId = async (req, res) => {
  if(req.params.name == null) return 400;
  return 200;
};