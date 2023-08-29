import React from "react";

const AddUser = ({ handleAddShow, handleAdd, setFormAddData, isAdd }) => {
  return (
    <div className="m-2">
      <div className="flex justify-center items-center">
        <button
          onClick={handleAddShow}
          className="m-2  bg-blue-400 rounded-md p-2"
        >
          Add new Volunteer
        </button>
      </div>
      {isAdd && (
        <div className="flex justify-center items-center">
          <button
            onClick={handleAdd}
            className="m-2  bg-blue-200 rounded-md p-2"
          >
            Add
          </button>
        </div>
      )}
      {isAdd && (
        <div className="grid grid-cols-3 m-2 ml-1 text-xs">
          <input
            type="text"
            placeholder="name"
            onChange={(e) =>
              setFormAddData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="m-1 p-1 focus:outline-none bg-gray-200 rounded-md"
          />
          <input
            type="text"
            placeholder="avatar"
            onChange={(e) =>
              setFormAddData((prev) => ({ ...prev, avatar: e.target.value }))
            }
            className="m-1 p-1  focus:outline-none bg-gray-200 rounded-md"
          />
          <input
            type="text"
            placeholder="hero_project"
            onChange={(e) =>
              setFormAddData((prev) => ({
                ...prev,
                hero_project: e.target.value,
              }))
            }
            className="m-1 p-1  focus:outline-none bg-gray-200 rounded-md"
          />
          <input
            type="text"
            placeholder="notes"
            onChange={(e) =>
              setFormAddData((prev) => ({ ...prev, notes: e.target.value }))
            }
            className="m-1 p-1  focus:outline-none bg-gray-200 rounded-md"
          />

          <input
            type="text"
            placeholder="email"
            onChange={(e) =>
              setFormAddData((prev) => ({ ...prev, email: e.target.value }))
            }
            className="m-1 p-1  focus:outline-none bg-gray-200 rounded-md"
          />
          <input
            type="text"
            placeholder="phone"
            onChange={(e) =>
              setFormAddData((prev) => ({ ...prev, phone: e.target.value }))
            }
            className="m-1 p-1  focus:outline-none bg-gray-200 rounded-md"
          />
          <input
            type="text"
            placeholder="rating"
            onChange={(e) =>
              setFormAddData((prev) => ({ ...prev, rating: e.target.value }))
            }
            className="m-1 p-1  focus:outline-none bg-gray-200 rounded-md"
          />
        </div>
      )}
    </div>
  );
};

export default AddUser;
