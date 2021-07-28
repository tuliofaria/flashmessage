import 'tailwindcss/tailwind.css'
import '../assets/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <footer className='text-center text-white'>
        <p>
          Projeto desenvolvido por: Tulio Faria no{' '}
          <a href='https://devpleno.com'>DevPleno.com</a>
        </p>
        <p>
          <a href='https://go.devpleno.com/fsm'>Fullstack Master</a>
        </p>
      </footer>
    </>
  )
}

export default MyApp
