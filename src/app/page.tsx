import { UserNav } from '../components/UserNav';

const Home = () => {
  return (
    <div className="flex gap-4 p-4">
      <h1 className="text-3xl">this is the home page</h1>
      <UserNav />
    </div>
  );
};

export default Home;
