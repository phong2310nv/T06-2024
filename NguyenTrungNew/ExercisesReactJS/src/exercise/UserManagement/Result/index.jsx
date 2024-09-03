import { Input, Button } from "../../../component";
import DesktopView from "./desktopView";
import MobileView from "./mobileView";
import { useScreenWidth } from "../../../hook";

function ResultDataUser(props) {
  const withResize = useScreenWidth();
  const {
    searchName,
    handleSearchName,
    setSearchName,
    listUsers,
    editValue,
    removeUser,
  } = props;
  
  return (
    <div className="max-w-[1300px] w-full border bg-gray-100 mt-2 rounded-lg shadow-md p-2">
      <div>
        <label className="block lg:inline-block" htmlFor="searchName">
          Search:
        </label>
        <Input
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          type="text"
          name="searchName"
          placeholder="Search for user by name..."
        />
        <Button variant="success" onClick={handleSearchName}>
          Search
        </Button>
      </div>
      {listUsers.length > 0 ? (
        withResize >= 1024 ? (
          <DesktopView
            listUsers={listUsers}
            editUser={editValue}
            removeUser={removeUser}
          />
        ) : (
          <MobileView
            listUsers={listUsers}
            editUser={editValue}
            removeUser={removeUser}
          />
        )
      ) : (
        <div className="my-5">
          <p className="text-center italic font-light">No users available</p>
        </div>
      )}
    </div>
  );
}

export default ResultDataUser;
