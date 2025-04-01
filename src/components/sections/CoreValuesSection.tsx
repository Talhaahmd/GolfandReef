import { useState } from "react";

type Unit = {
  label: string;
  unitSize: string;
  balcony: string;
  rooftop: string;
  total: string;
  Description: string;
  image: string;
  bedrooms: number;
  hasRooftop: boolean;
};

const unitData: Unit[] = [
  {
    label: "TIPOLOGIA D",
    unitSize: "116 m²",
    balcony: "96 m²",
    rooftop: "N/A",
    total: "Nivel 1",
    Description: "Spacious 2-bedroom layout with expansive terrace and lush garden views.",
    image: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743540380/enfjgbgujqzs79c3mrsz.png",
    bedrooms: 2,
    hasRooftop: false,
  },
  {
    label: "TIPOLOGIA E",
    unitSize: "110 m²",
    balcony: "25 m²",
    rooftop: "N/A",
    total: "Nivel 1",
    Description: "Elegant 1-bedroom + family suite, offering a tranquil indoor-outdoor living experience.",
    image: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743540380/qcvdjgka5s8wzxwwvbfr.png",
    bedrooms: 1,
    hasRooftop: false,
  },
  {
    label: "Tipologia 7B Rooftop",
    unitSize: "110 m²",
    balcony: "97 m²",
    rooftop: "134 m²",
    total: "Nivel 4, Nivel 5",
    Description: "Modern 2-level unit with panoramic rooftop, ideal for entertaining and sunset views.",
    image: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743540380/lszkgbizbct24ezoqlfr.png",
    bedrooms: 2,
    hasRooftop: true,
  },
  {
    label: "Tipologia A",
    unitSize: "150 m²",
    balcony: "62 m²",
    rooftop: "N/A",
    total: "Nivel 1",
    Description: "Grand 3-bedroom layout with a private pool and tropical garden access.",
    image: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743540379/co1qeh4dehpthyd6yfgm.png",
    bedrooms: 2,
    hasRooftop: false,
  },
  {
    label: "Nivel 5 - Tipologia 9",
    unitSize: "113 m²",
    balcony: "55 m²",
    rooftop: "²",
    total: "Nivel 5, Nivel 6",
    Description: "Spacious 1-bedroom + family layout with dual-level access and scenic balcony.",
    image: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743540378/d4jsaeawigkvytvtbttk.png",
    bedrooms: 1,
    hasRooftop: true,
  },
  {
    label: "Nivel 2 - Tipologia 5",
    unitSize: "74 m²",
    balcony: "18 m²",
    rooftop: "N/A",
    total: "Nivel 2",
    Description: "Efficient and minimalist design perfect for a modern vacation lifestyle.",
    image: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743540379/vpxkklaym4fdhb7qtgto.png",
    bedrooms: 1,
    hasRooftop: false,
  },
  {
    label: "Nivel 6 - Tipologia 9 Rooftop",
    unitSize: "113 m²",
    balcony: "55 m²",
    rooftop: "179 m²",
    total: "Nivel 5, Nivel 6",
    Description: "Full rooftop suite with outdoor dining, lounge, and pool area for elevated living.",
    image: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743540379/liio45gjozblriwpnsxh.png",
    bedrooms: 2,
    hasRooftop: true,
  },
  {
    label: "Nivel 2|3|4 - Tipologia 4",
    unitSize: "104 m²",
    balcony: "36 m²",
    rooftop: "N/A",
    total: "Nivel 2, Nivel 3, Nivel 4",
    Description: "Functional 2-bedroom setup with covered balcony and great light distribution.",
    image: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743540379/yyendqpwwf83hyja79zn.png",
    bedrooms: 1,
    hasRooftop: false,
  },
  {
    label: "Nivel 2|3|4 - Tipologia 3",
    unitSize: "93 m²",
    balcony: "47 m²",
    rooftop: "N/A",
    total: "Nivel 2, Nivel 3, Nivel 4",
    Description: "Balanced proportions for couples or small families, with serene terrace views.",
    image: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743540379/bdabay7h4e79fa1cg5kw.png",
    bedrooms: 1,
    hasRooftop: false,
  },
  {
    label: "Nivel 4 - Tipologia 4B Rooftop",
    unitSize: "104 m²",
    balcony: "36 m²",
    rooftop: "147 m²",
    total: "Nivel 4",
    Description: "Stylish rooftop extension with entertainment-ready outdoor spaces.",
    image: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743540378/w6pb4js2fhgli3xpql7j.png",
    bedrooms: 1,
    hasRooftop: true,
  },
  {
    label: "Nivel 6 Tipologia 8B Rooftop",
    unitSize: "117 m²",
    balcony: "50 m²",
    rooftop: "208 m²",
    total: "Nivel 5, Nivel 6",
    Description: "Luxury duplex with an expansive rooftop for relaxation and gatherings.",
    image: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743540378/vbtwuesqqp974orctcai.png",
    bedrooms: 2,
    hasRooftop: true,
  },
  {
    label: "Nivel 4 - Tipologia 3B Rooftop",
    unitSize: "93 m²",
    balcony: "27 m²",
    rooftop: "57 m²",
    total: "Nivel 4",
    Description: "A rooftop oasis attached to a compact 2-bedroom unit, perfect for couples.",
    image: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743540378/qyx6lb46tnoi7oq3waew.png",
    bedrooms: 1,
    hasRooftop: true,
  },
  {
    label: "Nivel 2|3 tipologia 1",
    unitSize: "145 m²",
    balcony: "132 m²",
    rooftop: "N/A",
    total: "Nivel 2, Nivel 3",
    Description: "Highly spacious 3-bedroom plan with panoramic wraparound terrace.",
    image: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743540378/lb0avct03vtwyo22vsmf.png",
    bedrooms: 2,
    hasRooftop: false,
  },
  {
    label: "Nivel 2|3|4 - Tipologia 2",
    unitSize: "106 m²",
    balcony: "21 m²",
    rooftop: "N/A",
    total: "Nivel 2, Nivel 3, Nivel 4",
    Description: "Open-layout living and smart bedroom zoning for families or couples.",
    image: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743540378/effhhbczasq53eruvey8.png",
    bedrooms: 1,
    hasRooftop: false,
  },
  {
    label: "Nivel 5 - Tipologia 8C",
    unitSize: "144 m²",
    balcony: "104 m²",
    rooftop: "195 m²",
    total: "Nivel 5, Nivel 6",
    Description: "Grand floorplan with luxurious rooftop lounge, ideal for entertaining guests.",
    image: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743540378/c7pnnz7sasaemqjj2y6x.png",
    bedrooms: 3,
    hasRooftop: true,
  },
  {
    label: "Nivel 4 - Tipologia 2B",
    unitSize: "106 m²",
    balcony: "20 m²",
    rooftop: "147 m²",
    total: "Nivel 4",
    Description: "Balanced interior layout with stunning rooftop for private outdoor living.",
    image: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743540378/xwiuxr6bbhzk1mvc2iea.png",
    bedrooms: 1,
    hasRooftop: true,
  },
  {
    label: "Nivel 4 - Tipologia 3B Rooftop",
    unitSize: "93 m²",
    balcony: "27 m²",
    rooftop: "57 m²",
    total: "Nivel 4",
    Description: "Intimate layout with upper-level terrace to unwind and enjoy fresh air.",
    image: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743540377/zgcssjr3zbj991z2q64m.jpg",
    bedrooms: 1,
    hasRooftop: true,
  },
  {
    label: "Nivel 5 - Tipologia 8A Rooftop",
    unitSize: "128 m²",
    balcony: "80 m²",
    rooftop: "173 m²",
    total: "Nivel 5, Nivel 6",
    Description: "Perfect for luxurious living, combining indoor comfort and outdoor leisure.",
    image: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743540377/he0ntwas6zrfzydg9uns.png",
    bedrooms: 2,
    hasRooftop: true,
  },
  {
    label: "Nivel 5 - Tipologia 8C",
    unitSize: "144 m²",
    balcony: "104 m²",
    rooftop: "195 m²",
    total: "Nivel 5, Nivel 6",
    Description: "Breathtaking dual-level apartment with vast terraces and entertaining zones.",
    image: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743540377/jatmkdjceq3nj14qbetm.jpg",
    bedrooms: 3,
    hasRooftop: true,
  },
  {
    label: "Nivel 4 - tipologia 2B Rooftop",
    unitSize: "106 m²",
    balcony: "20 m²",
    rooftop: "147 m²",
    total: "Nivel 4",
    Description: "Modern upper-floor design with exclusive rooftop space and open-air dining.",
    image: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743540377/r2qfmewfy7fu4xfx709h.jpg",
    bedrooms: 1,
    hasRooftop: true,
  },
  {
    label: "Nivel 4 tipologia 7",
    unitSize: "93 m²",
    balcony: "57 m²",
    rooftop: "N/A",
    total: "Nivel 4",
    Description: "A compact lifestyle unit with exceptional terrace space for sun lounging.",
    image: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743540377/ao7rlp8806cfgar95sbb.png",
    bedrooms: 1,
    hasRooftop: false,
  },
  {
    label: "nivel 1 - Tipologia A",
    unitSize: "150 m²",
    balcony: "62 m²",
    rooftop: "N/A",
    total: "Nivel 1",
    Description: "Signature 3-bedroom design with garden terrace and luxurious proportions.",
    image: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743540377/yvlfdf0zluqimt9lzyfx.jpg",
    bedrooms: 3,
    hasRooftop: false,
  },
];

export const FloorplanSelector = () => {
  const [selected, setSelected] = useState(0);
  const [bedroomFilter, setBedroomFilter] = useState("All");
  const [rooftopOnly, setRooftopOnly] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setShowForm(false), 2500);
  };

  const filteredUnits = unitData.filter((unit) => {
    const matchBedroom = bedroomFilter === "All" || unit.bedrooms === parseInt(bedroomFilter);
    const matchRooftop = !rooftopOnly || unit.hasRooftop;
    return matchBedroom && matchRooftop;
  });

  const unit = filteredUnits[selected] || filteredUnits[0];

  return (
    <section id="floorplan" className="bg-[#fef8f2] min-h-screen py-20 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">// Floor plans</p>
        <h2 className="text-4xl font-bold mb-8 text-[#0A1A2F]">
          Choose the perfect space for you
        </h2>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8 items-center">
          <select
            onChange={(e) => {
              setBedroomFilter(e.target.value);
              setSelected(0);
            }}
            className="border px-4 py-2 rounded-md"
          >
            <option value="All">All Bedrooms</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
          </select>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={rooftopOnly}
              onChange={() => {
                setRooftopOnly(!rooftopOnly);
                setSelected(0);
              }}
            />
            Show Only Rooftop Units
          </label>
        </div>

        {/* Unit Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filteredUnits.map((item, i) => (
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

        {/* Unit Details */}
        {unit && (
          <div className="grid md:grid-cols-2 gap-12 items-center">
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
              <div className="pt-4 text-sm text-[#0A1A2F]/90 italic">{unit.Description}</div>

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

            <div>
              <img
                src={unit.image}
                alt={unit.label}
                className="w-full max-h-[520px] object-contain rounded-lg border"
              />
            </div>
          </div>
        )}
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
                <h3 className="text-2xl font-semibold text-[#0A1A2F] mb-2">Thank you!</h3>
                <p className="text-gray-600">Our team will reach out to you shortly.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
