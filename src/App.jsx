import AboutMe from './components/AboutMe';
import SocialLink from './components/SocialLink';
import Footer from './components/Footer';
import MainWrapper from './components/Wrapper';
import './App.css';

const userInfo = {
  username: '@musartedev',
  profilePicture:
    'https://pbs.twimg.com/profile_images/1647699178087170050/s7BJylVd_400x400.jpg',
  description: 'Frontend developer',
  links: [
    {
      title: 'Twitter',
      url: 'https://twitter.com/musartedev',
    },
    {
      title: 'Github',
      url: 'https://github.com/musartedev',
    },
    {
      title: 'Instagram',
      url: 'https://instagram.com/musarte.dev',
    },
  ],
};

function App() {
  return (
    <>
      <MainWrapper>
        <AboutMe
          username={userInfo.username}
          profileUrl={userInfo.profilePicture}
          description={userInfo.description}
        />
        {userInfo.links.map((item) => (
          <SocialLink key={item.title} title={item.title} link={item.url} />
        ))}
      </MainWrapper>
      <Footer username={userInfo.username} />
    </>
  );
}

export default App;
