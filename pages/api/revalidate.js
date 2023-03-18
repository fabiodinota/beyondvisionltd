export default async function handler(req, res) {  
    try {     
        await res.revalidate('/our-talents')
        await res.revalidate('/')
        return res.status(200).send()
      } catch (err) {
        console.error(err)
        return res.status(500).send('Revalidation Error')
      }
  }