import { BsImage } from "react-icons/bs";
import { HiOutlineSearch } from "react-icons/hi";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { MdOutlineLocationOn, MdOutlineStarPurple500 } from "react-icons/md";
import { TbCoinBitcoin, TbHomeSearch } from "react-icons/tb";
import { TfiAngleDown, TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import banner from "../assets/banner.png";
import cardImg1 from "../assets/cardImg1.png";
import cardImg2 from "../assets/cardImg2.png";
import cardImg3 from "../assets/cardImg3.png";
import human1 from "../assets/human1.png";
import human2 from "../assets/human2.png";
import Footer from "../globalComponents/Footer";
import NavBar from "../globalComponents/NavBar";
const JahidulHome = () => {
  return (
    <div className="w-full h-auto">
      <NavBar />
      <Banner />
      <TotalSummery />
      <PropertiesCarousel />
      <Testimonials />
      <PostYourProperty />
      <Footer />
    </div>
  );
};

export default JahidulHome;

const Banner = () => {
  return (
    <div className="w-full h-[85vh] max-w-[1600px] relative">
      <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
        <div className="w-[70vw] max-w-[1000px] drop-shadow-xl rounded-md bg-white h-auto p-6 space-y-10 z-10">
          {/* Buttons */}
          <div className="w-full flex items-center gap-x-6 relative">
            <div className="w-full border-t-2 border-[#ECF5FF] absolute bottom-0 left-0"></div>
            <button className="relative pb-1 border-[#0059B1] text-[#0059B1] border-b-2 border-transparent">
              Blue
            </button>
            <button className="relative pb-1 focus:border-[#0059B1] focus:text-[#0059B1] border-b-2 border-transparent">
              Rent
            </button>
            <button className="relative pb-1 focus:border-[#0059B1] focus:text-[#0059B1] border-b-2 border-transparent">
              PG
            </button>
            <button className="relative pb-1 focus:border-[#0059B1] focus:text-[#0059B1] border-b-2 border-transparent">
              Commercial
            </button>
          </div>
          {/* SearchBar */}
          <div className="w-full h-10 focus-within:border-gray-500 duration-200 px-2 gap-x-2 rounded border flex items-center text-gray-800 font-light">
            <HiOutlineSearch />
            <input
              type="text"
              placeholder="Search Properties"
              className="flex-1 h-full outline-none"
            />
          </div>
          {/* Dropdown Card */}
          <div className="w-full grid grid-cols-3 gap-x-5">
            <div className="w-full flex flex-col items-start gap-y-1 font-medium text-lg">
              <p className="flex items-center gap-x-2  ">
                <MdOutlineLocationOn className="text-orange-500" />
                <span>Your Location</span>
              </p>
              <button className="flex items-center px-4 h-12 justify-end w-full rounded text-orange-500 bg-[#ECF5FF]">
                <TfiAngleDown />
              </button>
            </div>
            <div className="w-full flex flex-col items-start gap-y-1 font-medium text-lg">
              <p className="flex items-center gap-x-2  ">
                <TbHomeSearch className="text-orange-500" />
                <span>Property Type</span>
              </p>
              <button className="flex items-center px-4 h-12 justify-end w-full rounded text-orange-500 bg-[#ECF5FF]">
                <TfiAngleDown />
              </button>
            </div>
            <div className="w-full flex flex-col items-start gap-y-1 font-medium text-lg">
              <p className="flex items-center gap-x-2  ">
                <TbCoinBitcoin className="text-orange-500" />
                <span>Budget</span>
              </p>
              <button className="flex items-center px-4 h-12 justify-end w-full rounded text-orange-500 bg-[#ECF5FF]"></button>
            </div>
          </div>
          {/* search button  */}
          <div
            className="w-ful h-12 flex items-center justify-center gap-x-3 bg-[#0059B1] text-white rounded
          ">
            <HiOutlineSearch />
            <span>Find Properties</span>
          </div>
        </div>
      </div>
      <div className="w-full relative h-1/2 overflow-hidden">
        <div className="w-full absolute top-0 left-0 h-full bg-black opacity-20 "></div>
        <img src={banner} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-1/2 bg-white"></div>
    </div>
  );
};
const TotalSummery = () => {
  return (
    <div className="w-full max-w-[1600px] grid grid-cols-5 gap-x-5 px-14">
      <SummeryCard
        data={{
          total: "2k+",
          title: "New Flat List",
          bgColor: "bg-[#FDF0E7]",
          textColor: "text-orange-600",
        }}
      />
      <SummeryCard
        data={{
          total: "2k+",
          title: "New Flat Listed",
          bgColor: "bg-[#ECF5FF]",
          textColor: "text-indigo-600",
        }}
      />
      <SummeryCard
        data={{
          total: "2k+",
          title: "New Flat List",
          bgColor: "bg-[#FDF0E7]",
          textColor: "text-orange-600",
        }}
      />
      <SummeryCard
        data={{
          total: "2k+",
          title: "New Flat Listed",
          bgColor: "bg-[#ECF5FF]",
          textColor: "text-indigo-600",
        }}
      />
      <SummeryCard
        data={{
          total: "2k+",
          title: "New Flat List",
          bgColor: "bg-[#FDF0E7]",
          textColor: "text-orange-600",
        }}
      />
    </div>
  );
};
const SummeryCard = ({ data }) => {
  return (
    <div
      className={`w-full h-[140px] mb-20 p-5 flex flex-col justify-between items-start ${data?.textColor}  ${data.bgColor} `}>
      <div className="text-3xl font-bold">
        <p>{data.total}</p>
        <p className="text-black text-sm font-normal">{data.title}</p>
      </div>
      <div className="w-full flex items-center justify-between">
        <button className="underline">View all</button>
        <IoArrowDownCircleOutline className="text-3xl" />
      </div>
    </div>
  );
};
const PropertiesCarousel = () => {
  return (
    <div className="w-full max-w-[1600px] px-16">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-black">
          Popular Properties
        </h2>
        <button className="underline text-[#0059B1] font-medium ">
          See all property
        </button>
      </div>
      <Carousel />
      <div className="w-full flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-black">
          New Listed Properties
        </h2>
        <button className="underline text-[#0059B1] font-medium ">
          See all property
        </button>
      </div>
      <Carousel />
    </div>
  );
};
const Carousel = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-5 relative py-5 border-b border-dashed mb-5 ">
      <button className=" absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-10 w-10 text-xl rounded-full bg-blue-300 text-white z-10">
        <TfiAngleLeft />
      </button>
      <button className=" absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-10 w-10 text-xl rounded-full bg-blue-300 text-white z-10">
        <TfiAngleRight />
      </button>
      <PropertyCard data={{ img: cardImg1 }} />
      <PropertyCard data={{ img: cardImg2 }} />
      <PropertyCard data={{ img: cardImg3 }} />
    </div>
  );
};

const PropertyCard = ({ data }) => {
  return (
    <div className="w-full max-h-[400px] flex flex-col">
      <div className="w-full h-[220px] overflow-hidden relative">
        <img src={data.img} alt="" className="w-full h-full object-cover " />
        <button className="px-2 py-1 rounded-md absolute bottom-3 left-3 flex items-center gap-x-1 text-black text-sm bg-orange-50 font-medium">
          <BsImage className="text-orange-500" /> <span>20</span>
        </button>
      </div>
      <div className="w-full h-auto max-h-[200px] space-y-2 overflow-hidden bg-gray-50 p-4">
        <div className="w-full flex items-center justify-between text-black font-medium border-b pb-2">
          <button className="px-2 py-1 bg-blue-100 rounded-md text-xs">
            Apartment
          </button>
          <p className="flex items-center gap-x-1 text-sm">
            <span className="h-2 w-2 bg-orange-500"></span>
            Ready to Move
          </p>
        </div>
        <h3 className="text-lg font-medium">Sunny Slope Suites</h3>
        <p className="flex items-center gap-x-1">
          <MdOutlineLocationOn className="text-orange-500" /> Meadowshire Park,
          Greenfield, USA
        </p>
        <h3 className="text-xl font-semibold">$ 250000</h3>
      </div>
    </div>
  );
};
const Testimonials = () => {
  return (
    <div className="w-full max-w-[1600px] px-16 my-16 text-center">
      <h2 className="text-4xl font-bold text-[#181818] mb-10 text-center">
        Testimonials
      </h2>
      <div className="w-full grid grid-cols-2 gap-10">
        <TestimonialsCard data={{ name: "Tony Stark", img: human1 }} />
        <TestimonialsCard data={{ name: "Tony Stark", img: human2 }} />
      </div>
      <div className="w-full flex items-center justify-center gap-x-3 pt-8">
        <span className="h-4 w-8 rounded-full bg-orange-500"></span>
        <span className="h-4 w-4 rounded-full bg-orange-100"></span>
        <span className="h-4 w-4 rounded-full bg-orange-100"></span>
        <span className="h-4 w-4 rounded-full bg-orange-100"></span>
      </div>
    </div>
  );
};

const TestimonialsCard = ({ data }) => {
  return (
    <div className="py-10 w-full bg-blue-50 flex flex-col items-center gap-y-6 ">
      <div className="w-full flex items-center justify-center text-[#FEC84B] gap-x-2 text-3xl">
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 className="text-[#F4E6C5]" />
      </div>
      <p className="max-w-[400px] text-gray-600">
        "The level of security provided by CypherPlay is unmatched. I feel
        confident using my card for both everyday purchases and travel. It's the
        peace of mind I was looking for."
      </p>
      <div className="flex flex-col items-center justify-center text-center gap-2">
        <div className="h-10 w-10 rounded-full overflow-hidden">
          <img src={data.img} alt="" className="h-full w-full object-contain" />
        </div>
        <p className="text-base font-medium text-black">{data.name}</p>
        <p className="text-gray-700 font-light text-sm">Market manager, XYZ</p>
      </div>
    </div>
  );
};

const PostYourProperty = () => {
  return (
    <div className="w-full p-16 max-w-[1600px] flex items-center justify-between bg-orange-50 ">
      <div className="space-y-1">
        <p className="text-base font-medium text-black">
          Post Your Property for free
        </p>
        <p className="text-xs font-normal text-gray-700">
          List it on your property and get genuine leads
        </p>
      </div>
      <button className="bg-orange-500 py-2 px-5 rounded-md font-medium text-white  ">
        Post Property
      </button>
    </div>
  );
};
