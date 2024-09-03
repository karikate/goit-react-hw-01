import s from "./Profile.module.css";

const Profile = ({
  username,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={s.wrapper}>
      <div>
        <div className={s.imgWrapper}>
          <img src={image} alt="User avatar" />
        </div>
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={s.infoList}>
        <li className={s.infoItem}>
          <span>Followers</span>
          <span className={s.infoSpan}>{followers}</span>
        </li>
        <li className={s.infoItem}>
          <span>Views</span>
          <span className={s.infoSpan}>{views}</span>
        </li>
        <li className={s.infoItem}>
          <span>Likes</span>
          <span className={s.infoSpan}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
