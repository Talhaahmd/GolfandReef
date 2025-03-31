import { useState } from "react";

export const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    // You can replace this with a POST request to your backend or 3rd party form service
    setIsOpen(false); // close after submit
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-xl relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>
        <h2 className="text-2xl font-semibold text-center mb-4">Stay Connected</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            required
            className="border px-4 py-2 rounded-md"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email"
            required
            className="border px-4 py-2 rounded-md"
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Your Phone"
            required
            className="border px-4 py-2 rounded-md"
          />
          <button
            type="submit"
            className="bg-black text-white rounded-md py-2 mt-2 hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
