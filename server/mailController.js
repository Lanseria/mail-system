const { transporter, mailOptions } = require('./mail/mailer')

exports.common = async function (ctx) {
  const { request } = ctx
  const { query } = request
  const newMailOpt = { ...mailOptions, ...query}
  const info = await transporter.sendMail(newMailOpt)
  ctx.body = info
}
