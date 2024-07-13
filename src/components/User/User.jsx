import PropTypes from "prop-types";
const User = ({ user, handleUserDetails, selectedUser }) => {
  const { id, avatar, jobTitle, profile } = user;
  return (
    <li className="mb-5 p-5 border rounded-md flex items-center gap-5">
      <figure>
        <img
          className="w-36 rounded-full h-36"
          src={avatar}
          alt={profile?.firstName + " Image"}
        />
      </figure>
      <aside>
        <h3 className="text-xl font-bold">{`${profile?.firstName} ${profile?.lastName}`}</h3>
        <p>{jobTitle}</p>
        <p>Email: {profile?.email}</p>
        <button
          onClick={() => handleUserDetails(id)}
          className={`
            ${selectedUser === id ? "text-red-400" : "text-blue-400"}
             hover:underline transition duration-300`}
        >
          See more...
        </button>
      </aside>
    </li>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
  handleUserDetails: PropTypes.func.isRequired,
  selectedUser: PropTypes.string,
};

export default User;