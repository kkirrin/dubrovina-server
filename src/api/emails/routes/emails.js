    module.exports = {
      routes: [
        {
          method: "POST",
          path: "/emails/send",
          handler: "email.sendEmail",
          config: {
            auth: false, // Если не нужна авторизация
          }
        },
      ],
    };
