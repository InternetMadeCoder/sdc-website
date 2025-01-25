import Image from "next/image";

const TestimonialCard = ({ user, company, message, profile, className = '' }) => {
  return (
    <div className={`px-4 py-8 bg-[#f5f1ed] rounded-[25px] flex flex-col md:flex-row gap-6 items-start sm:px-12 ${className}`}>
      <div className="flex-shrink-0 flex flex-col items-center md:items-start text-center md:text-left">
        <Image
          src={profile}
          width={150} 
          height={150} 
          alt={user}
          className="rounded-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="mb-4">
          <span className="text-lg font-bold">{user}</span>
          <br />
          <span className="text-sm">{company}</span>
        </div>
        <p className="italic text-sm text-justify sm:text-base">{message}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;