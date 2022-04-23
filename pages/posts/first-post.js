//importing Head component for html <head> tag
import Head from 'next/head'

//importing Link component for anchor tag to navigate among different pagees
import Link from 'next/link'

//importing Layout component from custom created components
import Layout from '../../components/layout'

export default function FirstPost()
{
    return (
        
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>

            <h1>First Post</h1>
            <h3>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h3>
        </Layout>
    )
}