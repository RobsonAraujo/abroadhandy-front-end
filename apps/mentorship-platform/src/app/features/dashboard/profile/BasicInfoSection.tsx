"use client";

import { Camera } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import Image from "next/image";

interface BasicInfoSectionProps {
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
}

export default function BasicInfoSection({ user }: BasicInfoSectionProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Basic Information
        </h2>
        <p className="text-gray-600">Update your basic profile information</p>
      </div>

      {/* Profile Photo */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Profile Photo
        </h3>
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
              {user.avatar ? (
                <Image
                  src={user.avatar}
                  alt={user.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src="/default-avatar.svg"
                  alt={user.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <button className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition-colors">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">
              Upload a professional photo. Students connect better with mentors
              they can see.
            </p>
            <Button variant="outline" size="sm">
              Change Photo
            </Button>
          </div>
        </div>
      </div>

      {/* Basic Info Form */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Personal Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <Input
              defaultValue={user.name}
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <Input
              defaultValue={user.email}
              type="email"
              placeholder="Enter your email"
              disabled
              className="bg-gray-50 cursor-not-allowed"
            />
            <p className="text-xs text-gray-500 mt-1">
              Email cannot be changed
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Country
            </label>
            <Select>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="afghanistan">Afghanistan</SelectItem>
                <SelectItem value="albania">Albania</SelectItem>
                <SelectItem value="algeria">Algeria</SelectItem>
                <SelectItem value="argentina">Argentina</SelectItem>
                <SelectItem value="australia">Australia</SelectItem>
                <SelectItem value="austria">Austria</SelectItem>
                <SelectItem value="bangladesh">Bangladesh</SelectItem>
                <SelectItem value="belgium">Belgium</SelectItem>
                <SelectItem value="brazil">Brazil</SelectItem>
                <SelectItem value="canada">Canada</SelectItem>
                <SelectItem value="chile">Chile</SelectItem>
                <SelectItem value="china">China</SelectItem>
                <SelectItem value="colombia">Colombia</SelectItem>
                <SelectItem value="denmark">Denmark</SelectItem>
                <SelectItem value="egypt">Egypt</SelectItem>
                <SelectItem value="finland">Finland</SelectItem>
                <SelectItem value="france">France</SelectItem>
                <SelectItem value="germany">Germany</SelectItem>
                <SelectItem value="ghana">Ghana</SelectItem>
                <SelectItem value="greece">Greece</SelectItem>
                <SelectItem value="india">India</SelectItem>
                <SelectItem value="indonesia">Indonesia</SelectItem>
                <SelectItem value="ireland">Ireland</SelectItem>
                <SelectItem value="israel">Israel</SelectItem>
                <SelectItem value="italy">Italy</SelectItem>
                <SelectItem value="japan">Japan</SelectItem>
                <SelectItem value="kenya">Kenya</SelectItem>
                <SelectItem value="malaysia">Malaysia</SelectItem>
                <SelectItem value="mexico">Mexico</SelectItem>
                <SelectItem value="netherlands">Netherlands</SelectItem>
                <SelectItem value="new-zealand">New Zealand</SelectItem>
                <SelectItem value="nigeria">Nigeria</SelectItem>
                <SelectItem value="norway">Norway</SelectItem>
                <SelectItem value="pakistan">Pakistan</SelectItem>
                <SelectItem value="philippines">Philippines</SelectItem>
                <SelectItem value="poland">Poland</SelectItem>
                <SelectItem value="portugal">Portugal</SelectItem>
                <SelectItem value="russia">Russia</SelectItem>
                <SelectItem value="saudi-arabia">Saudi Arabia</SelectItem>
                <SelectItem value="singapore">Singapore</SelectItem>
                <SelectItem value="south-africa">South Africa</SelectItem>
                <SelectItem value="south-korea">South Korea</SelectItem>
                <SelectItem value="spain">Spain</SelectItem>
                <SelectItem value="sweden">Sweden</SelectItem>
                <SelectItem value="switzerland">Switzerland</SelectItem>
                <SelectItem value="thailand">Thailand</SelectItem>
                <SelectItem value="turkey">Turkey</SelectItem>
                <SelectItem value="ukraine">Ukraine</SelectItem>
                <SelectItem value="united-arab-emirates">
                  United Arab Emirates
                </SelectItem>
                <SelectItem value="united-kingdom">United Kingdom</SelectItem>
                <SelectItem value="united-states">United States</SelectItem>
                <SelectItem value="vietnam">Vietnam</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
