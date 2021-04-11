import Button from '../Button';
import './index.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__box">
          <div className="hero__starter">
            <h1 className="hero__title">
              Based on your answers, you can
              <span className="hero__title-strong">loose 8lbs</span>in 1 month
            </h1>
            <p className="hero__starter__content">
              We've evaluated answers and prepdared a summary out of 10.243
              people similar to you
            </p>
            <Button blueColor>START NOW</Button>
          </div>
          <div className="hero__data-box">
            <div className="hero__data-chart"></div>
            <div className="hero__results">
              <div className="hero__results__left">
                <h3 className="hero__results__title">
                  87<span>%</span>
                </h3>
                <p className="hero__results__content">
                  Similar people
                  <span className="hero__results__content-green">lost</span>more
                  than
                  <span className="hero__results__content-green">10kg</span>
                  on Fitter
                </p>
              </div>
              <div className="hero__results__right">
                <h3 className="hero__results__title">
                  -5 <span>kg</span>
                </h3>
                <p>After first week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
