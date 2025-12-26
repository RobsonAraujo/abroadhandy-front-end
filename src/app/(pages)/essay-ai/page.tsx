"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { PenTool, Sparkles, Users, ArrowRight } from "lucide-react";

export default function EssayMBAPage() {
  const [essayType, setEssayType] = useState("");
  const [program, setProgram] = useState("");
  const [school, setSchool] = useState("");

  return (
    <div className="min-h-screen bg-background-light bg-opacity-30">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black lg:text-6xl xl:text-7xl mb-6">
              Essay MBA
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Get AI-powered assistance for your MBA, Master's, PhD, and Medical School essays. 
              Craft compelling personal statements that stand out to admissions committees worldwide.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">MBA Essays</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Personal Statements</span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">PhD Applications</span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">Medical School</span>
            </div>
          </div>

          {/* Essay Assistant Form */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <div className="flex items-center mb-6">
                <PenTool className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-black">AI Essay Assistant</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Essay Type
                  </label>
                  <Select value={essayType} onValueChange={setEssayType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select essay type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="personal-statement">Personal Statement</SelectItem>
                      <SelectItem value="why-mba">Why MBA</SelectItem>
                      <SelectItem value="career-goals">Career Goals</SelectItem>
                      <SelectItem value="leadership">Leadership Essay</SelectItem>
                      <SelectItem value="diversity">Diversity Essay</SelectItem>
                      <SelectItem value="research-statement">Research Statement</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Program Type
                  </label>
                  <Select value={program} onValueChange={setProgram}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mba">MBA</SelectItem>
                      <SelectItem value="masters">Master's</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                      <SelectItem value="medical">Medical School</SelectItem>
                      <SelectItem value="law">Law School</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target School (Optional)
                  </label>
                  <Input 
                    placeholder="e.g., Harvard, Stanford, Oxford"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                  />
                </div>
              </div>
              
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                size="lg"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Get AI Essay Suggestions
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PenTool className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">AI-Powered Writing</h3>
                <p className="text-gray-600">Get intelligent suggestions, structure guidance, and content ideas tailored to your program.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Smart Feedback</h3>
                <p className="text-gray-600">Receive real-time feedback on clarity, impact, and alignment with admissions criteria.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Expert Review</h3>
                <p className="text-gray-600">Connect with mentors from your target programs for personalized essay review.</p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
              <p className="text-xl mb-6 opacity-90">
                Connect with mentors from your target programs for personalized guidance
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Users className="w-5 h-5 mr-2" />
                Find Expert Mentors
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
