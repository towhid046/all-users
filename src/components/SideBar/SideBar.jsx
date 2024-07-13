import PropTypes from "prop-types";

const SideBar = ({ isError2, isLoading2, user }) => {
  const { avatar, profile, jobTitle, Bio } = user;
  return (
    <aside className="col-span-1 rounded-md border sticky top-20 max-h-[70vh] p-5">
      <h3 className="text-2xl font-semibold text-center mb-7 underline">
        User details
      </h3>

      {isError2 ? (
        <h2 className="mt-44 text-xl flex items-center justify-center  font-semibold italic text-gray-600 ">
          Failed to load User
        </h2>
      ) : isLoading2 ? (
        <div className="mt-44 text-xl flex items-center justify-center">
          <span className="loading loading-md"></span>
        </div>
      ) : (
        <div>
          <div className="text-center space-y-4">
            <figure className="flex justify-center">
              <img
                className="w-44 rounded-full h-44"
                src={avatar}
                alt="User Image"
              />
            </figure>
            <div>
              <h3 className="text-xl font-bold">
                <em>Name: </em>
                {` ${profile?.firstName} ${profile?.lastName}`}
              </h3>
              <p>
                <em>Job Title:</em> {jobTitle}
              </p>
              <p>
                <em>Bio:</em> {Bio}
              </p>
              <p>
                <em>Email:</em> {profile?.email}
              </p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

SideBar.propTypes = {
  user: PropTypes.object.isRequired,
  isError2: PropTypes.string,
  isLoading2: PropTypes.bool,
};

export default SideBar;