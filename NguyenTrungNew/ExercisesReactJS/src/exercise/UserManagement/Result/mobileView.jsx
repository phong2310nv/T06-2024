import { Button } from "../../../component";

function MobileView({ listUsers, editUser, removeUser }) {
  return (
    <div>
      <div>
        {listUsers.map((item) => {
          const {
            address,
            avatar,
            description,
            doB,
            duration,
            fullName,
            gender,
            id,
            married,
            salary,
          } = item;
          return (
            <div
              key={id}
              className="my-8 p-5 border border-gray-300 rounded-lg shadow-sm shadow-black bg-gray-50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="w-[125px] inline-block">Name:</span>
                  <span>{fullName}</span>
                </div>
                <div>
                  <span className="w-[125px] inline-block">DoB:</span>
                  <span>{doB}</span>
                </div>
                <div>
                  <span className="w-[125px] inline-block">Address:</span>
                  <span>{address}</span>
                </div>
                <div>
                  <span className="w-[125px] inline-block">Salary:</span>
                  <span>{salary}</span>
                </div>
                <div>
                  <span className="w-[125px] inline-block">Description:</span>
                  <span>{description}</span>
                </div>
                <div>
                  <span className="w-[125px] inline-block">Gender:</span>
                  <span>{gender}</span>
                </div>
                <div>
                  <span className="w-[125px] inline-block">Married:</span>
                  <span>{married ? "Married" : "Single"}</span>
                  <div>
                    <span className="block mt-3">Avatar:</span>
                    <img
                      className="h-14 w-14 object-cover rounded-full mt-3"
                      src={avatar}
                    />
                  </div>
                </div>
                <div>
                  <span className="w-[125px] inline-block">Duration:</span>
                  <span>{`${
                    duration === "1" ? duration + " year" : duration + " years"
                  }`}</span>
                </div>
              </div>
              <div className="flex justify-center gap-5 mt-5">
                <Button
                  className="border border-green-500 text-white bg-green-500 font-normal active:bg-opacity-50"
                  onClick={() => editUser(id)}
                >
                  Edit
                </Button>
                <Button
                  className="border border-red-500 text-white bg-red-500 font-normal active:bg-opacity-50"
                  onClick={() => removeUser(id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MobileView;