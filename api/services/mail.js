const nodemailer = require('nodemailer');

exports.sendMail = async (emailUser, ticketId,date) => {
  // Créer un objet transporter avec les informations de connexion SMTP
  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // true pour 465, false pour les autres ports
    auth: {
      user: "sav48ynov@outlook.com", // adresse e-mail
      pass: "ynov2023*" // mot de passe de votre compte
    },
    tls: {
      ciphers: "SSLv3"
    }
  });

  // Configurer les options du mail
  let mailOptions = {
    from: "sav48ynov@outlook.com",
    to: emailUser,
    subject: 'Ticket créé',
    text: "Votre ticket est créé le "+date+". Vous pouvez consulter le ticket ici : "+ticketId,
  };

  // Envoyer l'email
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Erreur lors de l'envoi de l'email : " + error);
    } else {
      console.log("Email envoyé avec succès : " + info.response);
    }
  });
}

exports.sendMailWhenAdminSendMessage = async (emailUser, ticketId,date) => {
  // Créer un objet transporter avec les informations de connexion SMTP
  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // true pour 465, false pour les autres ports
    auth: {
      user: "sav48ynov@outlook.com", // adresse e-mail
      pass: "ynov2023*" // mot de passe de votre compte
    },
    tls: {
      ciphers: "SSLv3"
    }
  });

  // Configurer les options du mail
  let mailOptions = {
    from: "sav48ynov@outlook.com",
    to: emailUser,
    subject: 'Reponse ticket',
    text: "Vous avez eu une réponse pour votre ticket "+ticketId+" le "+date+".",
  };

  // Envoyer l'email
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Erreur lors de l'envoi de l'email : " + error);
    } else {
      console.log("Email envoyé avec succès : " + info.response);
    }
  });
}