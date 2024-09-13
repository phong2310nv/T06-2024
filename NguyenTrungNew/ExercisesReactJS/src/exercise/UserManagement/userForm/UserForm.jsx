import { Input, Button, TextArea, Select } from "../../../component";

function UserForm(props) {
  const {
    user,
    handleSubmit,
    idRef,
    changeValue,
    toggleTextBtn,
    handleResetValue,
    errors,
    nameRef,
  } = props;
  return (
    <div className="grid grid-cols1 lg:grid-cols-2 bg-gray-100 max-w-[1300px] shadow-md w-full  rounded-lg p-10 ">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" readOnly hidden ref={idRef} />
        <div>
          <p>Name:</p>
          <Input
            type="text"
            name="fullName"
            className = {`${errors.fullName && "border border-red-600 shake"}`}
            placeholder="Enter your full name here"
            value={user.fullName}
            onChange={changeValue}
            ref={nameRef}
          />
          {errors.fullName && <p className="text-red-600 text-xs italic mt-1 ml-1 ">{errors.fullName}</p>}
        </div>
        <div>
          <p>Data Of Birth:</p>
          <Input
            type="date"
            name="doB"
            value={user.doB}
            onChange={changeValue}
          />
        </div>
        <div>
          <p>Address:</p>
          <Input
            type="text"
            name="address"
            placeholder="Enter your address here"
            value={user.address}
            onChange={changeValue}
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="shrink-0">
            <img
              className="h-16 w-16 object-cover rounded-full"
              src={user.avatar}
            />
          </div>
          <label className="block">
            <span className="sr-only">Chọn avatar của bạn</span>
            <Input onChange={changeValue} type="file" name="avatar" />
          </label>
        </div>
      </form>
      <div className="flex flex-col gap-4 mt-5 lg:mt-0">
        <div>
          <p>Average Salary</p>
          <Input
            type="number"
            name="salary"
            placeholder="Enter your Salary here"
            value={user.salary}
            onChange={changeValue}
          />
        </div>
        <div>
          <p>Description</p>
          <TextArea
            rows={3}
            placeholder="Enter your description here"
            name="description"
            value={user.description}
            onChange={changeValue}
          />
        </div>
        <div>
          <p>Gender: </p>
          <Input
            type="radio"
            name="gender"
            value="male"
            checked={user.gender === "male"}
            onChange={changeValue}
          />
          Male
          <Input
            type="radio"
            name="gender"
            value="female"
            checked={user.gender === "female"}
            onChange={changeValue}
          />
          Female
          <Input
            type="radio"
            name="gender"
            value="other"
            checked={user.gender === ""}
            onChange={changeValue}
          />
          Other
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="married">Married: </label>
          <Input
            type="checkbox"
            name="married"
            checked={user.married}
            onChange={changeValue}
          />
        </div>
        <div>
          <p>Duration</p>
          <Select
            name="duration"
            id="duration"
            items={[
              { label: "1 year", value: "1" },
              { label: "2 years", value: "2" },
              { label: "3 years", value: "3" },
              { label: "4 years", value: "4" },
              { label: "5 years", value: "5" },
            ]}
          />
        </div>
      </div>
      <div className="flex flex-row gap-4 my-7 lg:mt-0">
        <Button type="submit" onClick={handleSubmit} variant="orange">
          {toggleTextBtn}
        </Button>
        <Button
          type="button"
          onClick={handleResetValue}
          variant="secondaryOrange"
        >
          Reset
        </Button>
      </div>
    </div>
  );
}

export default UserForm;
