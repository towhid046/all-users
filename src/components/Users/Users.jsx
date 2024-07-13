import { useEffect, useState } from "react";
import User from "./../User/User";
import SideBar from "./../SideBar/SideBar";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  const [user, setUser] = useState({});
  const [isLoading2, setIsLoading2] = useState(false);
  const [isError2, setIsError2] = useState(null);

  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(
          `https://602e7c2c4410730017c50b9d.mockapi.io/users`
        );
        const data = await res.json();
        setUsers([...data]?.reverse().slice(1, data.length));
        setUser(data[data.length - 2]);
        setSelectedUser(data[data.length - 2].id);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  const handleUserDetails = async (id) => {
    setIsLoading2(true);
    try {
      const res = await fetch(
        `https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}`
      );
      const data = await res.json();
      setUser(data);
      setSelectedUser(id);
    } catch (error) {
      setIsError2(error.message);
    } finally {
      setIsLoading2(false);
    }
  };

  if (isError) {
    return (
      <section className="flex justify-center min-h-[90vh] items-center">
        <span className="text-2xl font-semibold italic text-gray-600 ">
          Failed to load Users
        </span>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="flex justify-center min-h-[90vh] items-center">
        <span className="loading loading-lg"></span>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 my-10 min-h-screen ">
      <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1">
        <div className="lg:col-span-2 p-5 rounded-md border">
          <h3 className="text-2xl font-semibold text-center mb-7 underline">
            Users list: {users.length}
          </h3>
          <ul>
            {users &&
              users?.map((user, index) => (
                <User
                  selectedUser={selectedUser}
                  setSelectedUser={setSelectedUser}
                  handleUserDetails={handleUserDetails}
                  key={index}
                  user={user}
                />
              ))}
          </ul>
        </div>

        {/* sidebar */}

        <SideBar user={user} isError2={isError2} isLoading2={isLoading2} />
      </div>
    </section>
  );
};

export default Users;