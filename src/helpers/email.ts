export const sendEmail = async (body: string) => {
  const response = await Email.send({
    SecureToken: '43cdc463-996c-491e-b398-06ddbb443913',
    From: 'navasardianmichael@gmail.com',
    To: 'navasardianmichael2@gmail.com',
    Subject: 'Email From Portfolio Website',
    Body: body
  })
  return response 
}