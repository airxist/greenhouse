import Butterfly from "../../../assets/svg/Butterfly";
import Star from "../../../assets/svg/Star";

const Sustainability = () => {
  return (
    <section className="h-[678px] bg-fysi-green">
      <div className="w-full flex items-center h-full">
        <div className="relative pl-[110px] pt-[7.5rem] pb-[55px] h-full w-full md:w-3/12 flex flex-col justify-between">
          <div className="absolute top-4 left-10">
            <Butterfly />
          </div>

          <div className="w-[214px]">
            <h1 className="text-foundation font-bold text-[2rem]">
              Sustainability HighLight
            </h1>
          </div>

          <p className="text-xl text-white">
            Shop confidently with our eco-certified vendors—your choices make a
            real difference.
          </p>

          <div className="absolute bottom-0 right-0">
            <Star />
          </div>
        </div>

        <div className="hidden md:block w-6/12 h-full">
          <img
            src="/hero_bg/sustainability.png"
            alt="sustain"
            className="size-full object-cover object-center"
          />
        </div>

        <div className="hidden h-full md:w-3/12 md:flex items-center">
          <div className="pr-[101px] ml-5">
            <Star type={2} />
            <p className="text-xl text-white">
              Shopping on Fysi means you are helping to build a more sustainable
              world and that makes you a hero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
