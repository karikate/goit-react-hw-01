import s from "./FriendList.module.css";

import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.wrapper}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem friendData={friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
