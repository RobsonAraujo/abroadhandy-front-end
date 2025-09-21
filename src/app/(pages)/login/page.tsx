import HeroSection from "@/app/components/features/login/HeroSection";
import LoginForm from "@/app/components/features/login/LoginForm";

export default function Login() {
  return (
    <div className="min-h-screen bg-background-light py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroSection />
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
