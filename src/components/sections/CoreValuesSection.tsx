import { useState } from "react";

const unitData = [
  {
    label: "2-bedroom",
    unitSize: "117 m²",
    balcony: "50 m²",
    rooftop: "208 m²",
    total: "375 m²",
    floor: "Nivel 5 + Roof",
    image:
      "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743482314/screenshot_29-3-2025_142246_pjmlamaidnkoemaaofddboidllnogmhe_b8kkby.jpg",
  },
  {
    label: "3-bedroom",
    unitSize: "144 m²",
    balcony: "104 m²",
    rooftop: "195 m²",
    total: "443 m²",
    floor: "Nivel 5 + Roof",
    image:
      "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743482314/screenshot_29-3-2025_142258_pjmlamaidnkoemaaofddboidllnogmhe_ooyzcv.jpg",
  },
  {
    label: "Penthouse",
    unitSize: "150 m²",
    balcony: "62 m²",
    rooftop: "—",
    total: "212 m²",
    floor: "Nivel 1",
    image:
      "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743482314/screenshot_29-3-2025_142519_pjmlamaidnkoemaaofddboidllnogmhe_yiqova.jpg",
  },
];

export const FloorplanSelector = () => {
  const [selected, setSelected] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const unit = unitData[selected];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setShowForm(false), 2500);
  };

  return (
    <section
      id="floorplan"
      className="bg-[#fef8f2] min-h-screen py-20 px-6 md:px-12 relative"
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
          // Floor plans
        </p>
        <h2 className="text-4xl font-bold mb-8 text-[#0A1A2F]">
          Choose the perfect space for you
        </h2>

        {/* Unit Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {unitData.map((item, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition ${
                selected === i
                  ? "bg-[#D4AF37] text-white border-[#D4AF37]"
                  : "bg-white text-[#0A1A2F] border-gray-300 hover:border-[#D4AF37]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Info Table */}
          <div className="text-left space-y-4 text-[#0A1A2F]">
            <div className="flex justify-between border-b pb-1">
              <span>Unit size</span>
              <span>{unit.unitSize}</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span>Balcony area</span>
              <span>{unit.balcony}</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span>Rooftop area</span>
              <span>{unit.rooftop}</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span>Total area</span>
              <span>{unit.total}</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span>Floor</span>
              <span>{unit.floor}</span>
            </div>

            <button
              onClick={() => {
                setShowForm(true);
                setFormSubmitted(false);
              }}
              className="mt-6 px-6 py-3 bg-[#D4AF37] text-white font-medium rounded-md hover:bg-[#c89e2f] transition-all"
            >
              I am Interested →
            </button>
          </div>

          {/* Floorplan Image */}
          <div>
            <img
              src={unit.image}
              alt={unit.label}
              className="w-full max-h-[520px] object-contain rounded-lg border"
            />
          </div>
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-lg p-8 w-full max-w-md text-left relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-4 text-gray-400 hover:text-black"
            >
              ✕
            </button>

            {!formSubmitted ? (
              <>
                <h3 className="text-2xl font-semibold text-[#0A1A2F] mb-4">
                  Let us contact you
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="w-full border px-4 py-2 rounded-md"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full border px-4 py-2 rounded-md"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="w-full border px-4 py-2 rounded-md"
                  />
                  <button
                    type="submit"
                    className="w-full mt-2 bg-[#D4AF37] text-white py-2 rounded-md hover:bg-[#c89e2f] transition"
                  >
                    Submit
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-10">
                <h3 className="text-2xl font-semibold text-[#0A1A2F] mb-2">
                  Thank you!
                </h3>
                <p className="text-gray-600">
                  Our team will reach out to you shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
