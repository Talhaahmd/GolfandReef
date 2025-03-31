export const FeatureCard = ({
  image,
  tagline,
  title,
  description,
  buttonText,
}: {
  image: string;
  tagline: string;
  title: string;
  description: string;
  buttonText: string;
}) => {
  return (
    <div className="flex flex-col justify-between bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full max-w-[400px] h-full">
      <img
        src={image}
        alt={title}
        className="rounded-t-xl w-full h-48 object-cover"
      />
      <div className="flex flex-col gap-4 p-6">
        <p className="text-sm text-gray-500 font-semibold">{tagline}</p>
        <h4 className="text-xl font-medium text-black">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
        <button className="mt-4 self-start px-4 py-2 bg-[#A0D3A9] text-black font-medium rounded-md hover:bg-[#90C399] transition">
          {buttonText}
        </button>
      </div>
    </div>
  );
};
