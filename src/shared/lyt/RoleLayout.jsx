import Header from "../components/_roles/Header";
import SideBar from "../components/_roles/SideBar";

const RoleLayout = ({ role, children }) => {
  return (
    <section className="flex">
      <SideBar type={role} />
      <div className="w-[81%]">
        <Header />
        {children}
      </div>
    </section>
  );
};

export default RoleLayout;
