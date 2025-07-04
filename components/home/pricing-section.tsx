import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

type PriceType = {
  name: string;
  price: number;
  description: string;
  items: string[];
  id: string;
  paymentLink: string;
  priceId: string;
};

const plans: PriceType[] = [
  {
    id: "basic",
    name: "Basic",
    price: 9,
    description: "Perfect for occasional use",
    items: ["5 PDF summaries per month", "Standard processing speed", "Email support"],
    paymentLink: "#",
    priceId: "",
  },
  {
    id: "pro",
    name: "Pro",
    price: 19,
    description: "For professionals and teams",
    items: [
      "Unlimited PDF summaries",
      "Priority processing",
      "24/7 priority support",
      "Markdown Export",
    ],
    paymentLink: "#",
    priceId: "",
  },
];

const PricingCard = ({
  name,
  price,
  description,
  items,
  id,
  paymentLink,
}: PriceType) => {
  return (
    <div className="relative w-full max-w-md bg-white rounded-2xl border p-6 shadow-lg hover:scale-[1.03] hover:shadow-xl transition-all duration-300">
      <div className="mb-4">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      <div className="mb-6">
        <p className="text-4xl font-bold flex items-end">
          ${price}
          <span className="text-sm font-normal ml-1 mb-1 text-gray-500">USD</span>
          <span className="text-xs font-light ml-1 mb-1 text-gray-400">/month</span>
        </p>
      </div>

      <ul className="space-y-3 mb-6">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
            <Check className="w-5 h-5 text-green-500 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <Link
        href={paymentLink}
        className="inline-flex items-center justify-center w-full rounded-full bg-gradient-to-r from-pink-500 to-red-500 px-6 py-2 text-white font-semibold transition hover:opacity-90"
      >
        Buy Now <ArrowRight className="ml-2 w-4 h-4" />
      </Link>
    </div>
  );
};

export default function PricingSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-pink-600 font-bold text-xl mb-12">PRICING</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
