import PropTypes from 'prop-types';

const Button = ({ color, text, onToggle }) => {
  return (
    <button onClick={onToggle} style={{ background: color }} className='btn'>
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: 'steelblue',
  text: 'Add',
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
