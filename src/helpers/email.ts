export const sendEmail = async (body: string) => {
  const response = await Email.send({
    SecureToken: '43cdc463-996c-491e-b398-06ddbb443913',
    // 92444f93-73a3-4521-a476-3edf6d0ca9f4
    From: 'navasardianmichael@gmail.com',
    To: 'navasardianmichael2@gmail.com',
    Subject: 'Email From Portfolio Website',
    Body: body
  })
  return response 
}