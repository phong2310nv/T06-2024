import MyInput from "../../components/MyInput";
import MyLabel from "../../components/MyLabel";
import MySelect from "../../components/MySelect";
import MyTextarea from "../../components/MyTextarea";
import MyButton from "../../components/MyButton";

const UserForm = () => {
  return (
    <div className="w-[500px] border rounded-xl p-4">
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2 items-start">
          <div>
            <MyLabel htmlFor="first_name">First name</MyLabel>
            <MyInput type="text" id="first_name" placeholder="John" />
          </div>
          <div>
            <MyLabel htmlFor="last_name">Last name</MyLabel>
            <MyInput type="text" id="last_name" placeholder="Doe" />
          </div>
          <div>
            <MyLabel htmlFor="salary">Salary</MyLabel>
            <MyInput type="number" id="salary" placeholder="100000" />
          </div>
          <div>
            <MyLabel htmlFor="phone">Phone number</MyLabel>
            <MyInput
              type="tel"
              id="phone"
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            />
          </div>
          <div>
            <MyLabel>Gender</MyLabel>
            <div>
              <MyLabel>
                <input type="radio" name="gender" value={"male"} />
                <span className="ms-2">Male</span>
              </MyLabel>
              <MyLabel>
                <input type="radio" name="gender" value={"female"} />
                <span className="ms-2">Female</span>
              </MyLabel>
              <MyLabel>
                <input type="radio" name="gender" value={"other"} />
                <span className="ms-2">Other</span>
              </MyLabel>
            </div>
          </div>
          <div className=" flex items-center gap-4 ">
            <input type="checkbox" className="w-4 h-4" id="isMarried" />
            <MyLabel className="mb-0" htmlFor="isMarried">
              Married
            </MyLabel>
          </div>
        </div>
        <div className="mb-4">
          <MyLabel htmlFor="file-input">Choose file</MyLabel>
          <MyInput type="file" name="file-input" id="file-input" />
        </div>

        <div className="mb-4" htmlFor="description">
          <MyLabel htmlFor="duration">Duration</MyLabel>
          <MySelect
            id="duration"
            items={[
              { label: "One year", value: 1 },
              { label: "Two years", value: 2 },
              { label: "Three years", value: 3 },
              { label: "Four years", value: 4 },
            ]}
          />
        </div>
        <div className="mb-4" htmlFor="description">
          <MyLabel>Description</MyLabel>
          <MyTextarea id="description" placeholder='Something about user' />
        </div>

        <div className="flex justify-between">
          <MyButton>Submit</MyButton>
          <MyButton variant="green">Submit</MyButton>
          <MyButton variant="red">Submit</MyButton>
          <MyButton variant="purple">Submit</MyButton>
          <MyButton variant="yellow">Submit</MyButton>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
