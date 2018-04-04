const { transporter, mailOptions } = require('./mail/mailer')

exports.common = async function (ctx) {
  const { request } = ctx
  const { query } = request
  mailOptions.to = query.toMail
  mailOptions.subject = query.subject
  mailOptions.text = query.text
  mailOptions.html = query.html
  const info = await transporter.sendMail(mailOptions)
  ctx.body = info
}
