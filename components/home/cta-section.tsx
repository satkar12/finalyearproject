import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="bg-[#fde6cc] py-12">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <h2 className="text-3xl sm:text-3xl font-bold text-gray-800">
            Ready to start smart and cooperative learning?
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Transform lengthy documents into clear, actionable insights with our AI-powered summarizer.
          </p>

          <Button asChild className="bg-gradient-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 text-white transition-all duration-300">
            <Link href="/#pricing" className="flex items-center justify-center px-6">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 animate-pulse" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
