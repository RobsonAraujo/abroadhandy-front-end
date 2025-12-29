import { Zap } from "lucide-react";

export default function AvailableBadge() {
  return (
    <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full font-medium flex items-center gap-1">
      <Zap className="w-3 h-3" />
      Available
    </span>
  );
}
