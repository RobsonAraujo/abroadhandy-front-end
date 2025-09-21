import HeroSection from "@/app/components/features/register/HeroSection";
import RegisterForm from "@/app/components/features/register/RegisterForm";

export default function Register() {
  return (
    <div className="min-h-screen bg-background-light py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroSection />
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
