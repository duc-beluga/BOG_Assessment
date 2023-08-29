import React from "react";

const Table = ({ users, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="flex justify-center items-center">
      <table className="table-auto text-xs font-thin border border-slate-400 text-center">
        <thead className="border border-slate-400">
          <tr>
            <th className="border-l-2 p-1">name</th>
            <th className="border-l-2 p-1">profile</th>
            <th className="border-l-2 p-1">phone</th>
            <th className="border-l-2 p-1">email</th>
            <th className="border-l-2 p-1">rating</th>
            <th className="border-l-2 p-1">status</th>
            <th className="border-l-2 p-1">hero_project</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border border-slate-400">
              <td className="border-l-2 p-1">{user.name}</td>
              <td className="border-l-2 p-1">
                <a
                  href={`http://localhost:5000/note/${user.id}`}
                  target="_blank"
                >
                  <img
                    src={user.avatar}
                    alt="avatar"
                    className="rounded-md w-8 h-8"
                  />
                </a>
              </td>
              <td className="border-l-2 p-1">{user.phone}</td>
              <td className="border-l-2 p-1">{user.email}</td>
              <td className="border-l-2 p-1">{user.rating}</td>
              <td className="border-l-2 p-1">{user.status}</td>
              <td className="border-l-2 p-1">{user.hero_project}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
