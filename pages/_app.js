import Header from '../components/Sidebar'
import Head from 'next/head'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> CoolFinance</title>
        <meta charSet="UTF-8"/>
        <meta name="description" content="Why waste resources on engineers that aren’t ideal for your project? Let Aplov pair you up with engineers that can quickly bring your concept to life."/>
        <meta name="keywords" content="HTML, CSS, JavaScript"/>
        {/* <meta name="author" content="John Doe"/> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <div className='lg:flex w-full'>
        <Header />
        <div className='lg:max-w-[calc(100%-300px)] w-full ml-auto'>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}

export default MyApp
