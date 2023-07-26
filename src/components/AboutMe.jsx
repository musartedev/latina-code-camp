import PropTypes from 'prop-types';

const AboutMe = ({ username, profileUrl, description }) => {
  return (
    <section className='about-me'>
      <img src={profileUrl} alt={username} />
      <h1>{username}</h1>
      {description && <p>{description}</p>}
    </section>
  );
};

AboutMe.propTypes = {
  username: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AboutMe;
