import { getStaticPaths } from "../our-talents/[slug]";

export default async function handler(req, res) {  
    try {
        // grab static paths using the same method Next.js would use
        const staticPaths = await getStaticPaths()
    
        // get an array of promises
        const revalidatePaths = staticPaths.map((path) =>
              res.unstable_revalidate(`/our-talents/${path.params.slug}`)
        );
    
        // run revalidation in parallel
        await Promise.all([res.unstable_revalidate('/our-talents'), ...revalidatePaths]);

        await res.revalidate('/our-talents')
        await res.revalidate('/')
        
        return res.status(200).send()
      } catch (err) {
        console.error(err)
        return res.status(500).send('Revalidation Error')
      }
  }