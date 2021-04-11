import Button from '../Button';
import signature from '../../assets/images/signature.png';
import './index.css';

function Promise() {
  return (
    <section className="promise">
      <div className="container">
        <h2 className="personal-summary__title">Our promise</h2>
        <p className="promise__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
          commodo nulla facilisi nullam vehicula ipsum a. Enim nulla aliquet
          porttitor lacus luctus accumsan tortor posuere ac. Lacus vestibulum
          sed arcu non odio euismod lacinia. Id faucibus nisl tincidunt eget
          nullam non nisi est. At varius vel pharetra vel turpis nunc eget
          lorem.
        </p>
        <p className="promise__paragraph">
          Ultricies mi eget mauris pharetra. Potenti nullam ac tortor vitae
          purus faucibus. Metus vulputate eu scelerisque felis imperdiet proin
          fermentum leo vel.
        </p>
        <p className="promise__paragraph">
          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper
          dignissim cras.
        </p>
        <p className="promise__paragraph">Head of Nutrition,</p>
        <p className="promise__paragraph">Christine Ellis</p>
        <img
          className="promise__signature"
          src={signature}
          alt="signature logo"
        />
      </div>
      <Button blueColor marginTop>
        Start now
      </Button>
    </section>
  );
}

export default Promise;
