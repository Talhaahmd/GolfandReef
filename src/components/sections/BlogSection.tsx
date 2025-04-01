import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const taxBenefits = [
  {
    title: "Tax Exemptions",
    content: "- Exempt from 3% property transfer tax.\n- 15 years free of IPI (Property Tax).",
  },
  {
    title: "CONFOTUR Benefits",
    content: "- Additional incentives for foreign investors.\n- Fast-track residency options.",
  },
];

const ownerPerks = [
  {
    title: "Elite Access",
    content: "- Priority mooring at Marina Cap Cana.\n- 24/7 concierge for yacht reservations.",
  },
  {
    title: "Beach & Golf",
    content: "- Unlimited access to Juanillo Beach Club.\n- Discounted membership at Punta Espada Golf Club.",
  },
  {
    title: "Security & Health",
    content: "- Biometric security systems.\n- On-call medical team and emergency center.",
  },
];

const AccordionItem = ({ item, index, openIndex, setOpenIndex, theme }) => {
  const isOpen = index === openIndex;
  return (
    <div className="mb-4">
      <button
        className={`w-full text-left py-4 px-6 font-semibold transition border-b ${theme.text} hover:underline hover:decoration-[#D4AF37]`}
        onClick={() => setOpenIndex(isOpen ? null : index)}
      >
        {item.title}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden px-6 pb-4 text-sm whitespace-pre-line"
          >
            {item.content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const InvestmentBenefitsSection = () => {
  const [openTax, setOpenTax] = useState(null);
  const [openPerks, setOpenPerks] = useState(null);

  return (
    <section
      className="relative w-full py-20 px-6 bg-white text-[#0A1A2F]"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743480643/screenshot_25-3-2025_23138_pjmlamaidnkoemaaofddboidllnogmhe_caroyv.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-16">
          Invest in Unmatched Value
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Tax Benefits */}
          <div className="bg-[#FDF7E3] p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-serif mb-4 text-[#D4AF37]">Tax Benefits</h3>
            {taxBenefits.map((item, i) => (
              <AccordionItem
                key={i}
                item={item}
                index={i}
                openIndex={openTax}
                setOpenIndex={setOpenTax}
                theme={{ text: "text-[#0A1A2F]" }}
              />
            ))}
          </div>

          {/* Right Column - Owner Perks */}
          <div className="bg-[#0A1A2F] p-6 rounded-xl shadow-md text-white">
            <h3 className="text-2xl font-serif mb-4 text-[#D4AF37]">Owner Perks</h3>
            {ownerPerks.map((item, i) => (
              <AccordionItem
                key={i}
                item={item}
                index={i}
                openIndex={openPerks}
                setOpenIndex={setOpenPerks}
                theme={{ text: "text-white" }}
              />
            ))}
          </div>
        </div>
        {/* Disclaimer */}
        
      </div>
      {/* Call to Action Form */}
<div className="mt-20 text-center">
  <h3 className="text-3xl font-semibold text-[#0A1A2F]">
    Ready to make us your home?
  </h3>
  <p className="text-sm text-gray-500 mt-1">
    Drop your info, and we’ll connect with you soon
  </p>

  <form className="mt-6 flex flex-col md:flex-row gap-4 justify-center items-center max-w-4xl mx-auto">
    <input
      type="text"
      placeholder="Name"
      className="w-full md:w-1/3 border px-4 py-3 rounded-md"
      required
    />
    <input
      type="email"
      placeholder="Email"
      className="w-full md:w-1/3 border px-4 py-3 rounded-md"
      required
    />
    <input
      type="tel"
      placeholder="Phone number"
      className="w-full md:w-1/3 border px-4 py-3 rounded-md"
      required
    />
    <button
      type="submit"
      className="bg-[#D4AF37] text-white font-medium px-6 py-3 rounded-md hover:bg-[#c89e2f] transition-all mt-4 md:mt-0"
    >
      Book a tour
    </button>
  </form>
</div>

    </section>
  );
};
