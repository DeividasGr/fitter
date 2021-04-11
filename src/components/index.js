import Expectations from './Expectations';
import Layout from './Layout';
import PersonalSummary from './PersonalSummary';
import ProfileSummary from './ProfileSummary';
import Promise from './Promise';
import Hero from './Hero';
import './index.css';

function App() {
  return (
    <Layout>
      <ProfileSummary years="25" height="169" weight="64" />
      <Hero />
      <PersonalSummary />
      <Expectations />
      <Promise />
    </Layout>
  );
}
export default App;
