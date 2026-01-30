"use client";

import { useAuth } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import GMATScoreSlider from "@/app/components/standardized-tests/GMATScoreSlider";

export default function DiagnosticPage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  const [hasTakenTest, setHasTakenTest] = useState<boolean | null>(null);
  const [quantScore, setQuantScore] = useState(500);
  const [verbalScore, setVerbalScore] = useState(500);
  const [totalScore, setTotalScore] = useState(500);

  const userNotAuthenticated = !isLoading && !isAuthenticated;

  useEffect(() => {
    if (userNotAuthenticated) {
      router.push("/login");
    }
  }, [userNotAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-primary" />
      </div>
    );
  }

  if (userNotAuthenticated) {
    return null;
  }

  const handleSubmit = () => {
    // TODO: Save scores and generate personalized plan
    console.log({ quantScore, verbalScore, totalScore });
    // Navigate back to course path or show results
    router.push("/dashboard/standardized-tests");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href="/dashboard/standardized-tests"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to course path
        </Link>

        <div className="mb-8">
          <h1 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Day 1 – Diagnostic
          </h1>
          <p className="text-lg text-gray-600">
            Let&apos;s personalize your GMAT Quant preparation based on your
            current level.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          {hasTakenTest === null ? (
            // Initial question: Have you taken the test?
            <div className="space-y-6">
              <div>
                <h2 className="mb-4 text-xl font-bold text-gray-900">
                  Have you taken the GMAT Official Free Practice Test?
                </h2>
                <p className="mb-6 text-gray-600">
                  We&apos;ll use your scores from Practice Test 1 or 2 to create
                  a personalized study plan tailored to your strengths and
                  weaknesses.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  variant="secondary"
                  size="lg"
                  className="flex-1 bg-gradient-to-br from-slate-900 via-slate-800 to-black ring-2 ring-cyan-400 text-cyan-300 hover:ring-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                  onClick={() => setHasTakenTest(true)}
                >
                  Yes, I have my scores
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 bg-gradient-to-br from-slate-900 via-slate-800 to-black ring-2 ring-cyan-400 text-cyan-300 hover:ring-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                  onClick={() => setHasTakenTest(false)}
                >
                  No, I haven&apos;t taken it yet
                </Button>
              </div>
            </div>
          ) : hasTakenTest === false ? (
            // Encourage to take the test
            <div className="space-y-6">
              <div className="rounded-xl border-2 border-primary bg-primary/10 p-6">
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-cyan-400 bg-black text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                      Take the Free Official GMAT Practice Test
                    </h3>
                    <p className="mb-4 text-gray-700">
                      The GMAT Official Starter Kit includes two free
                      full-length practice tests. It&apos;s easy, free, and
                      takes about 3 hours. This will give us accurate data to
                      personalize your course.
                    </p>
                    <a
                      href="https://www.mba.com/exam-prep/gmat-official-starter-kit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-black ring-2 ring-cyan-400 px-4 py-2 text-sm font-semibold text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all hover:ring-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.7)]"
                    >
                      Get Free Practice Test
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="mb-4 text-sm text-gray-600">
                  Once you&apos;ve completed the test, come back here and enter
                  your scores.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setHasTakenTest(true)}
                  className="bg-gradient-to-br from-slate-900 via-slate-800 to-black ring-2 ring-cyan-400 text-cyan-300 hover:ring-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                >
                  I&apos;ve taken the test, enter my scores
                </Button>
              </div>
            </div>
          ) : (
            // Score input form
            <div className="space-y-8">
              <div>
                <h2 className="mb-2 text-xl font-bold text-gray-900">
                  Enter Your GMAT Scores
                </h2>
                <p className="text-gray-600">
                  Use your scores from the GMAT Official Practice Test 1 or 2.
                  GMAT scores range from 205 to 805.
                </p>
              </div>

              <div className="space-y-8">
                {/* Total Score */}
                <div>
                  <label className="mb-4 block text-lg font-semibold text-gray-900">
                    Total Score
                  </label>
                  <GMATScoreSlider
                    value={totalScore}
                    onChange={setTotalScore}
                    min={205}
                    max={805}
                    color="#22d3ee"
                  />
                </div>

                {/* Quant Score */}
                <div>
                  <label className="mb-4 block text-lg font-semibold text-gray-900">
                    Quantitative Score
                  </label>
                  <GMATScoreSlider
                    value={quantScore}
                    onChange={setQuantScore}
                    min={205}
                    max={805}
                    color="#8cc8e4"
                  />
                </div>

                {/* Verbal Score */}
                <div>
                  <label className="mb-4 block text-lg font-semibold text-gray-900">
                    Verbal Score
                  </label>
                  <GMATScoreSlider
                    value={verbalScore}
                    onChange={setVerbalScore}
                    min={205}
                    max={805}
                    color="#6cc484"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
                <Button
                  variant="outline"
                  onClick={() => setHasTakenTest(null)}
                  className="bg-gradient-to-br from-slate-900 via-slate-800 to-black ring-2 ring-cyan-400 text-cyan-300 hover:ring-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                >
                  Back
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={handleSubmit}
                  className="bg-gradient-to-br from-slate-900 via-slate-800 to-black ring-2 ring-cyan-400 text-cyan-300 hover:ring-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.7)]"
                >
                  Generate My Personalized Plan
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
