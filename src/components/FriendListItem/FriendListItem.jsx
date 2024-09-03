import clsx from "clsx";
import s from "./FriendListItem.module.css";

const FriendListItem = ({ friendData: { avatar, name, isOnline } }) => {
  return (
    <div className={s.wrapper}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <div className={clsx(isOnline ? s.green : s.red)}>
        {s.green ? <p>Online</p> : <p>Offline</p>}
      </div>
    </div>
  );
};

export default FriendListItem;
