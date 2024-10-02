import MyPicture from "../components/MyPicture";
import BillingAddress from "../components/BillingAddress";

const Account = () => {
  return (
    <>
      <div className="md:flex items-center justify-between gap-x-8">
        <MyPicture />
        <BillingAddress />
      </div>
    </>
  );
};

export default Account;
