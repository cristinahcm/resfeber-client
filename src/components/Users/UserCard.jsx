

const UserCard = ({ 
  name,
  email,
  picture,
  interests,
  gender,
  age}) => {

  return (
    <div className="user-card">
      <div className="user-card__avatar">
        <img src={picture} alt="img"/>
      </div>
      <div className="user-card__info">
        <div className="user-card__name">{name}</div>
        <div className="user-card__email">{email}</div>
        <div className="user-card__interests">{interests}</div>
        <div ><p>Gender: {gender}</p> </div>
        <div> <p>Age:</p> <span>{age}</span> </div>
      </div>
    </div>
  );
}

export default UserCard;