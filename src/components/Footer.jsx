import '../CSS/Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-column">
                <h2>Address</h2>
                <a href='https://maps.app.goo.gl/tnYKdBFrzLRG1fA97'>
                    Suite 15, Level 1, 301 Castlereagh Street, Sydney, NSW-2000
                </a>
                <a href='#'>
                Contact us: +61-0292801337
                </a>
            </div>

            <div className="footer-column">
                <h2>Quick Links</h2>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
                <a href="#">Privacy Policy</a>
            </div>

            <div className="footer-column">
                <h2>Social</h2>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">LinkedIn</a>
            </div>
        </footer>
    )
}

export default Footer
