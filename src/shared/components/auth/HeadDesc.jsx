import Heading from "../Heading";
import Logo from "../../../assets/svg/Logo";

const HeadDesc = ({ title, desc, tClass }) => {
  return (
    <>
      <div className="w-fit mx-auto">
        <Logo />
      </div>
      <Heading
        conClass="text-center md:text-left"
        title={title}
        desc={desc}
        tclass={tClass || "text-[28px] font-semibold "}
        dclass="mt-3"
      />
    </>
  );
};

export default HeadDesc;
