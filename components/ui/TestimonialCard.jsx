import Image from "next/image";

const TestimonialCard = ({
  user,
  company,
  message,
  profile,
  className = "",
}) => {
  return (
    <div
      className={`px-4 py-6 bg-[#f5f1ed] rounded-[25px] flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start sm:px-12 h-[450px] md:h-[300px] ${className}`}
    >
      <div className="flex flex-col items-center md:items-start text-center shrink-0">
        <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] relative">
          <Image
            src={profile}
            fill
            alt={user}
            className="rounded-full object-cover"
          />
        </div>
        <div className="mt-3 md:hidden text-center w-full">
          <h3 className="text-lg font-bold">{user}</h3>
          <p className="text-sm">{company}</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col max-h-[200px] md:max-h-full md:h-full">
        <div className="mb-4 hidden md:block">
          <span className="text-lg font-bold">{user}</span>
          <br />
          <span className="text-sm">{company}</span>
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <p className="italic text-sm text-justify sm:text-base">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
