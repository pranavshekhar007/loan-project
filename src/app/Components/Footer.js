import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About */}
        <div className="footer-col">
          <h4>About Us</h4>
          <p>
            We are a leading financial services provider committed to making borrowing simple, transparent, and accessible for everyone.
          </p>
          <div className="footer-social">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/cibil">Cibil Enquiry</Link></li>
            <li><Link href="/interest-rate">Interest Rates</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/support">Support</Link></li>
          </ul>
        </div>

        {/* Loan Products */}
        <div className="footer-col">
          <h4>Loan Products</h4>
          <ul>
            <li><Link href="/personal-loan">Personal Loan</Link></li>
            <li><Link href="/business-loan">Business Loan</Link></li>
            <li><Link href="/consumer-durable">Consumer Durable Loan</Link></li>
            <li><Link href="/bnpl">Buy Now, Pay Later</Link></li>
            <li><Link href="/loan-against-property">Loan Against Property</Link></li>
            <li><Link href="/gold-loan">Gold Loan</Link></li>
            <li><Link href="/supply-chain">Supply Chain Finance</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="footer-contact">
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <div>123 Financial Street, Banking District<br/>Mumbai, Maharashtra 400001</div>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <div>+91 98*** ***10<br/>+91 91*** ***89</div>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <div>info@RupeeLoan.com<br/>support@RupeeLoan.com</div>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            &copy; 2025 RupeeLoan. All Rights Reserved.
          </div>
          <div className="footer-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-condtion">Terms of Service</Link>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
