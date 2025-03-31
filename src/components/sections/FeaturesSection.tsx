export const FeaturesSection = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Full Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://arichyhomes.com/wp-content/uploads/2024/12/Reef-Golf-Residences-in-Cap-Cana-4.jpg')",
        }}
      >
        <div className="w-full h-full bg-black/30" />
      </div>

      {/* Text Overlay in Bottom Right (flush corner) */}
      <div className="absolute bottom-0 right-0 bg-white p-6 md:p-8 w-full max-w-md">
        <p className="uppercase text-xs tracking-widest text-gray-500 mb-2">
          About Us
        </p>
        <h2 className="text-3xl font-semibold text-gray-900 mb-3">
          Reef & Golf Residences
        </h2>
        <p className="text-sm text-gray-800 leading-relaxed">
          Nestled beside the Las Iguanas Golf Course and just 600 meters from the sea, Reef & Golf Residences is an exclusive development offering 80 luxury apartments across 5 levels. Each unit features 1–2 bedrooms, family and service rooms, and private terraces with stunning views of the gardens, pools, and golf course. Residents can select unique layouts including private gardens or panoramic vistas—perfect for refined, elegant living.
        </p>
      </div>
    </section>
  );
};
