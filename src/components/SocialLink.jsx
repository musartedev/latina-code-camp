import PropTypes from 'prop-types';

const SocialLink = ({ title, link }) => {
  return (
    <a href={link} className='social-link' target='_blank' rel='noreferrer'>
      {title}
    </a>
  );
};

SocialLink.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SocialLink;
