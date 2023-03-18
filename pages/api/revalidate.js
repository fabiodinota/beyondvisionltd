export default async function handler(req, res) {  
    try {     
        await res.revalidate('/our-talents')
        await res.revalidate('/')
        return res.json({ revalidated: true });
      } catch (err) {
        console.error(err)
        return res.status(500).send('Revalidation Error')
      }
  }