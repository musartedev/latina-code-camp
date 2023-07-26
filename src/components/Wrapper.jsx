import PropTypes from 'prop-types';

const MainWrapper = ({ children }) => {
  return <main style={{ border: '1px solid red' }}>{children}</main>;
};

MainWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainWrapper;
