type T_Args = {
  subject: string, 
  body: string
}

export const sendEmail = async ({subject, body}: T_Args) => {
  const response = await Email.send({
    SecureToken : '69a8b1cb-96b2-4f95-969d-8b4f2bef28fb',
    From : 'navasardianmichael2@gmail.com' as string,
    To : 'navasardianmichael@gmail.com',
    Subject : subject,
    Body : body
  })
  return response 
}