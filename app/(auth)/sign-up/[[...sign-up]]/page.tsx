import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignUpPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-cream">
      <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow-lg">
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl font-medium mb-2">Create an account</h1>
          <p className="text-charcoal/60">Start your art journey today</p>
        </div>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <Input type="text" placeholder="Your name" className="rounded-xl" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <Input type="email" placeholder="you@example.com" className="rounded-xl" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <Input type="password" placeholder="••••••••" className="rounded-xl" />
          </div>
          <Button className="btn-primary w-full py-6 text-white font-semibold rounded-full border-0">
            Create Account
          </Button>
        </form>
        
        <p className="text-center text-sm text-charcoal/60 mt-6">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-accent font-semibold hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
