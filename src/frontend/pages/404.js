import Link from 'next/link'
import { useEffect, userEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            //router.go(+1)
            router.push('/');
        }, 3000)
    }, [])

    return (
        <>
      <Head>
        <title>Luma | Page Not Found</title>
        <meta name="keywords" content="404" />
      </Head>
        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>That page does not exist.</h2>
            <p>Go back to the <Link href="/">
                <a>Homepage</a>
                </Link>
                </p>
        </div>
        </>
     );
}
 
export default NotFound;