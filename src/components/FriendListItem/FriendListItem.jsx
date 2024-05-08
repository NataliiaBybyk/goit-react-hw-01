import css from '../FriendListItem/FriendListItem.module.css';
import clsx from 'clsx';
export default function FriendListItem({
  friends: { avatar, name, isOnline },
}) {
  return (
    <div className={css.friendlistitem_container}>
      <img src={avatar} alt="Avatar" width="90" />
      <p className={css.name}>{name}</p>
      <p className={clsx(isOnline === true ? css.offline : css.online)}>
        {isOnline === true ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
