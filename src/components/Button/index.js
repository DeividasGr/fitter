import './index.css';

function Button({ children, blueColor, marginTop }) {
  const buttonColor = blueColor ? 'btn-blue' : '';
  const mt = marginTop ? 'btn-mt' : '';

  return <button className={`btn ${buttonColor} ${mt}`}>{children}</button>;
}

export default Button;
