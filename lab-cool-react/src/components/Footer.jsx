import './footer.css';

import firstImg from '../assets/images/icon1.png';
import secondImg from '../assets/images/icon2.png';
import thirdImg from '../assets/images/icon3.png';
import forthImg from '../assets/images/icon4.png';

function Footer() {
  return (
    <div className="footer-container">
      <ul className="footer">
        <li>
          <img src={firstImg} alt="first" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs</p>
        </li>
        <li>
          <img src={secondImg} alt="second" />
          <h3>Components</h3>
          <p>React makes it painless to create interactive UIs</p>
        </li>
        <li>
          <img src={thirdImg} alt="third" />
          <h3>Single-Way</h3>
          <p>React makes it painless to create interactive UIs</p>
        </li>
        <li>
          <img src={forthImg} alt="forth" />
          <h3>JSX</h3>
          <p>React makes it painless to create interactive UIs</p>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
