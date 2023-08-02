
import '../static/css/Layout.css'
import Nav from './Nav'
import Hero from './Hero'
import Footer from './Footer'

function Layout() {
  return (
    <div>
        {/* Layout */}
        <div id="hero">
          <Nav />
          <Hero />
        </div>

        {/* <div id="footer"> */}
          <Footer />
        {/* </div> */}
    </div>
  )
}

export default Layout