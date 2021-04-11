import figure from '../../assets/images/figure.svg';
import './index.css';

function Expectations() {
  return (
    <section className="expectations">
      <div className="container">
        <h2 className="expectations__title">Here's what you can expect</h2>
        <h5 className="expectations__title-small">
          Your body change estaminations
        </h5>
        <div className="expectations__box">
          <div className="expectations__numbers">
            <img src={figure} alt="human figure"></img>
          </div>
          <div className="expectations__content">
            <h3>Get ready to change your jeans size!</h3>
            <p>
              Top performing users changed 2 sizes in 1 month. Prepare your
              skinny jeans back!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expectations;
