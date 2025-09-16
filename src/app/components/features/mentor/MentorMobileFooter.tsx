"use client";

import { Button } from "@/app/components/ui/button";
import { Heart, Calendar } from "lucide-react";

interface MentorMobileFooterProps {
  mentor: {
    id: string;
    name: string;
    price30min: number;
  };
}

export function MentorMobileFooter({ mentor }: MentorMobileFooterProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg md:hidden z-50">
      {/* Action Buttons */}
      <div className="flex gap-4 max-w-md mx-auto">
        <Button
          variant="outline"
          size="lg"
          className="h-12 w-16 p-0 rounded-lg border-gray-300"
        >
          <Heart className="w-5 h-5" color="black" />
        </Button>

        <Button
          variant="secondary"
          size="lg"
          className="h-12 flex-1 rounded-lg"
          iconStart={<Calendar className="w-5 h-5" />}
        >
          Book Session
        </Button>
      </div>
    </div>
  );
}
