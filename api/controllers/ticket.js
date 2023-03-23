const ticketServices = require('../services/ticket');

exports.addTicket = async (req, res) => {
  res.status(200).send(await ticketServices.addTicket());
};