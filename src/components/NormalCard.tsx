interface CardProps {
    image:string;
    name:string;
    specificaiton: string;
    text:string;
}

export default function NormalCard({image, name, specificaiton, text}: CardProps) {
  return (
    <div className="w-full flex flex-col">
      <div className="aspect-[3/4] w-full rounded-xl mt-10 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full rounded-md object-cover object-top transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="py-2"> 
        <p className="text-base mt-2 sm:text-lg font-semibold text-white">
          {name}
        </p>
        <h4 className="text-sm mt-[-5px] sm:text-md font-medium text-[#1AB8B3]">
          {specificaiton}
        </h4>
        <p className="text-sm sm:text-[17px] font-light text-white mt-1"> 
          {text}
        </p>
      </div>
    </div>
  );
}