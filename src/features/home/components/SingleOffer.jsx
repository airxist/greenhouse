const SingleOffer = ({ offer }) => {
  const { title, icon: Icon } = offer;
  return (
    <div className="flex-center rounded-[8px] bg-foundation w-full h-[166px] md:w-[292px] md:h-[200px] ">
      <div className="">
        <div className="w-fit mx-auto">
          <Icon />
        </div>
        <p className="text-xs md:text-[1.16rem] mt-6 text-fysi-green font-medium text-center">
          {title}
        </p>
      </div>
    </div>
  );
};

export default SingleOffer;
