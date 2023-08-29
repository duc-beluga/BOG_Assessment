import React from "react";

const UpdateUser = ({
  handleUpdateShow,
  handleFindId,
  handleUpdate,
  setFormUpdateData,
  isUpdate,
  foundUser,
  formUpdateData,
  updateIDRef,
  handleDelete,
  err,
}) => {
  return (
    <>
      <div className="m-2 flex justify-center items-center">
        <button
          onClick={handleUpdateShow}
          className="m-2 bg-blue-400 rounded-md p-2"
        >
          Update Volunteer
        </button>
        {isUpdate && (
          <div className="flex m-2 justify-between">
            <input
              ref={updateIDRef}
              id="idNum"
              type="text"
              className=" p-1 pl-3 mr-3 rounded-md bg-gray-400 focus:outline-none border-b-2 border-gray-800 placeholder-black"
              placeholder="Person full name..."
            />
            <div>
              <button
                className=" bg-blue-200 rounded-md p-2 mr-3"
                onClick={handleFindId}
              >
                Find
              </button>
            </div>
            {foundUser && (
              <div>
                <button
                  onClick={handleUpdate}
                  className="bg-green-400 rounded-md p-2 mr-3"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(foundUser)}
                  className="bg-red-400 rounded-md p-2"
                >
                  Delete
                </button>
              </div>
            )}
            {err && <div className="pt-2 italic">{err}</div>}
          </div>
        )}
      </div>

      {foundUser && isUpdate && (
        <div className="grid grid-cols-3 m-2 ml-3 text-xs">
          <input
            type="text"
            placeholder="name"
            onChange={(e) =>
              setFormUpdateData((prev) => ({ ...prev, name: e.target.value }))
            }
            value={formUpdateData.name}
            className="m-1 p-1 focus:outline-none bg-gray-200 rounded-md"
          />
          <input
            type="text"
            placeholder="avatar"
            onChange={(e) =>
              setFormUpdateData((prev) => ({ ...prev, avatar: e.target.value }))
            }
            value={formUpdateData.avatar}
            className="m-1 p-1 focus:outline-none bg-gray-200 rounded-md"
          />
          <input
            type="text"
            placeholder="hero_project"
            onChange={(e) =>
              setFormUpdateData((prev) => ({
                ...prev,
                hero_project: e.target.value,
              }))
            }
            value={formUpdateData.hero_project}
            className="m-1 p-1  focus:outline-none bg-gray-200 rounded-md"
          />
          <input
            type="text"
            placeholder="notes"
            onChange={(e) =>
              setFormUpdateData((prev) => ({ ...prev, notes: e.target.value }))
            }
            value={formUpdateData.notes}
            className="m-1 p-1  focus:outline-none bg-gray-200 rounded-md"
          />

          <input
            type="text"
            placeholder="email"
            onChange={(e) =>
              setFormUpdateData((prev) => ({ ...prev, email: e.target.value }))
            }
            value={formUpdateData.email}
            className="m-1 p-1  focus:outline-none bg-gray-200 rounded-md"
          />
          <input
            type="text"
            placeholder="phone"
            onChange={(e) =>
              setFormUpdateData((prev) => ({ ...prev, phone: e.target.value }))
            }
            value={formUpdateData.phone}
            className="m-1 p-1  focus:outline-none bg-gray-200 rounded-md"
          />
          <input
            type="text"
            placeholder="rating"
            onChange={(e) =>
              setFormUpdateData((prev) => ({ ...prev, rating: e.target.value }))
            }
            value={formUpdateData.rating}
            className="m-1 p-1  focus:outline-none bg-gray-200 rounded-md"
          />
        </div>
      )}
    </>
  );
};

export default UpdateUser;
