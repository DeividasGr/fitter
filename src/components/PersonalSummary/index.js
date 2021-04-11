import drop from '../../assets/images/drop.svg';
import human from '../../assets/images/human-icon.png';
import fire from '../../assets/images/fire.png';
import './index.css';

function PersonalSummary() {
  return (
    <section className="personal-summary">
      <div className="container">
        <h2 className="personal-summary__title">Personal summary</h2>
        <div className="personal-summary__box">
          <div className="personal-summary__card">
            <h3 className="personal-summary__card-title">Your BMI</h3>
            <p className="personal-summary__card-result">55.56</p>
            <div className="progress-bar"></div>
          </div>
          <div className="personal-summary__card">
            <h3 className="personal-summary__card-title">Your water balance</h3>
            <div className="personal-summary__content-container">
              <img className="img" src={drop} alt="water frop svg"></img>
              <div className="personal-summary__data-container">
                <p className="personal-summary__card-text">
                  Your daily minimum is
                </p>
                <p className="personal-summary__card-result">1.7 L</p>
              </div>
            </div>
          </div>
          <div className="personal-summary__card">
            <h3 className="personal-summary__card-title">Your metabolic age</h3>
            <div className="personal-summary__content-container">
              <img
                className="img"
                src={human}
                alt="human with circle around him"
              ></img>
              <div className="personal-summary__data-container">
                <p className="personal-summary__card-text">
                  Slightly higher than your actual age
                </p>
                <p className="personal-summary__card-result">29 years</p>
              </div>
            </div>
          </div>
          <div className="personal-summary__card">
            <h3 className="personal-summary__card-title">
              Your daily calorie intake
            </h3>
            <div className="personal-summary__content-container">
              <img className="img" src={fire} alt="fire logo"></img>
              <div className="personal-summary__data-container">
                <p className="personal-summary__card-text">
                  Recommended to achieve your goals
                </p>
                <p className="personal-summary__card-result">
                  2300 - 2400 kcal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PersonalSummary;
