import PropTypes from 'prop-types';

const Footer = ({ username }) => {
  return (
    <footer className='footer'>
      <p>Hecho con amor por: {username}</p>
    </footer>
  );
};

Footer.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Footer;
