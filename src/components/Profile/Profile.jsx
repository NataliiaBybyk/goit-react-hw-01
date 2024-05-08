import css from './Profile.module.css';
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profile_container}>
      <div className={css.profile_avatar}>
        <img className={css.profile_img} src={image} alt="User avatar" />
        <p className={css.profile_name}>{name}</p>
        <p className={css.profile_tag}>@{tag}</p>
        <p className={css.profile_location}>{location}</p>
      </div>

      <ul className={css.profile_list}>
        <li className={css.profile_list_item}>
          <span>Followers</span>
          <span className={css.profile_list_span}>{stats.followers}</span>
        </li>
        <li className={css.profile_list_item}>
          <span>Views</span>
          <span className={css.profile_list_span}>{stats.views}</span>
        </li>
        <li className={css.profile_list_item}>
          <span>Likes</span>
          <span className={css.profile_list_span}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
