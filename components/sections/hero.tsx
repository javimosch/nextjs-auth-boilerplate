import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Build Secure Apps{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Faster
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              A modern authentication boilerplate with NextJS and Supabase. Get started in minutes with
              secure, scalable authentication.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/register">
              <Button size="lg" className="min-w-[200px]">
                Get Started
              </Button>
            </Link>
            <Link href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="min-w-[200px]">
                View on GitHub
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}