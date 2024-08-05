import '../CSS/Navbar.css'

function Navbar() {

  return (
    <>
      <div className='Navbar-container'>
        <div className='logo'>
        <img  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9IwSANPVZUv0Rtb2P63DlRpU7h6hoEpO1NqazB4zzCtaSQmW4i7DuTDKFNPY2xP2UBHC-1HbHNVvJMjbBwkyoYOZT6oJH7kFdaumAO280smZm1T3TXiz4H3HQeFp7QRNVNcULTUOOgIGaSOh6AY1Dq6NkOtoVANsC3VwOAINxqTeaE7vggks41plzNYK9/s320/S&S%20legal%20logo%205.png" alt="" />
        </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="news.asp">Contact</a></li>
  <li><a href="contact.asp">Services</a></li>
  <li><a href="about.asp">Testimony</a></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
