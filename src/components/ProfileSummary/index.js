import './index.css';

function ProfileSummary({ years, height, weight }) {
  return (
    <section className="profile">
      <div className="container">
        <div className="profile__container">
          <h2 className="profile__summary-text">Your profile summary</h2>
          <ul className="profile__list">
            <li className="profile__list-item">
              {years}
              <span>
                years old<span className="profile__border"></span>
              </span>
            </li>
            <li className="profile__list-item">
              {height}
              <span>
                cm<span className="profile__border"></span>
              </span>
            </li>
            <li className="profile__list-item">
              {weight} <span>kg</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProfileSummary;
