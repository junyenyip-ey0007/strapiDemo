module.exports = ({ env }) => ({
    email: {
      config: {
        provider: "nodemailer",
        providerOptions: {
          host: env("SMTP_HOST", "smtp.gmail.com"),
          port: env("SMTP_PORT", 587),
          auth: {
            user: env("GM_EMAIL", "junyenyip@gmail.com"),
            pass: env("GM_PASSWORD", "trwdcieafgudzcuq"),
          },
          // ... any custom nodemailer options
        },
        from: "hello@example.com",
      },
    },
    ezforms: {
      config: {
        captchaProvider: {
          name: "none",
        },
        notificationProviders: [
          {
            name: "email",
            enabled: true,
            config: {
              subject: "Notif", // Optional
              from: "junyenyip@gmail.com", // Required
            },
          },
        ],
      },
    },
  });
  