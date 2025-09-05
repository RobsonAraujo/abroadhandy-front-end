import { Button } from "@/app/components/ui/button";

export default function CTAGuide() {
  return (
    <section className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[800px]">
            <div
              className="relative bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/become-a-mentor.png')",
              }}
            ></div>

            <div className="bg-success p-12 flex flex-col justify-center">
              <h2 className="text-5xl font-bold text-black lg:text-8xl xl:text-7xl mb-6">
                Become a Guide
              </h2>

              <p className="text-sm text-black mb-8 leading-relaxed">
                Earn money sharing your expert knowledge with students. Sign up
                to start guiding online with AbroadHandy.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-4"></div>
                  <span className="text-black font-medium text-2xl text-bold">
                    Find new students
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-4"></div>
                  <span className="text-black font-medium text-2xl ">
                    Grow your network
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-4"></div>
                  <span className="text-black font-medium text-2xl">
                    Get paid securely
                  </span>
                </div>
              </div>

              <Button
                href="/become-a-mentor"
                variant="black"
                size="lg"
                className="w-full"
              >
                Become a Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
