import userData from './userData.json';
import Profile from './components/Profile/Profile.jsx';
import friends from './friends.json';
import FriendList from './components/FriendList/FriendList.jsx';
import TransactionHistory from './components/Transactions/TransactionHistory.jsx';
import transactions from './transactions.json';

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
