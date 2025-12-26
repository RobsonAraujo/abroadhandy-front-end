"use client";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import {
  Upload,
  FileText,
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

type VerificationStatus = "pending" | "approved" | "rejected" | "not_submitted";

interface Document {
  id: number;
  name: string;
  type: string;
  uploadDate: string;
  size: string;
}

export default function VerificationSection() {
  // For demo purposes - change to "approved", "rejected", "pending", or "not_submitted"
  const [verificationStatus] = useState<VerificationStatus>("not_submitted");
  const [rejectionReason] = useState<string>(
    "Document quality is too low to verify authenticity. Please upload a clearer image or scan."
  );
  const [documents] = useState<Document[]>([
    {
      id: 1,
      name: "university_acceptance_letter.pdf",
      type: "Acceptance Letter",
      uploadDate: "2024-01-15",
      size: "2.3 MB",
    },
    {
      id: 2,
      name: "student_id_card.jpg",
      type: "Student ID",
      uploadDate: "2024-01-16",
      size: "1.8 MB",
    },
  ]);

  const [dragActive, setDragActive] = useState(false);

  const getStatusIcon = (status: VerificationStatus) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "rejected":
        return <XCircle className="w-5 h-5 text-red-600" />;
      case "pending":
        return <Clock className="w-5 h-5 text-yellow-600" />;
      default:
        return <FileText className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusText = (status: VerificationStatus) => {
    switch (status) {
      case "approved":
        return "Approved";
      case "rejected":
        return "Rejected";
      case "pending":
        return "Under Review";
      default:
        return "Not Submitted";
    }
  };

  const getStatusColor = (status: VerificationStatus) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800 border-green-200";
      case "rejected":
        return "bg-red-100 text-red-800 border-red-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFiles = (files: FileList) => {
    // Handle file upload logic here
    console.log("Files to upload:", files);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Account Verification
        </h2>
        <p className="text-gray-600">
          Upload documents to verify your student or alumni status. This helps
          build trust with students.
        </p>
      </div>

      {/* Verification Status Overview */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium text-gray-900">
            Verification Status
          </h3>
          <div className="flex items-center space-x-2">
            {getStatusIcon(verificationStatus)}
            <span
              className={`px-3 py-1 text-sm font-medium rounded-full border ${getStatusColor(
                verificationStatus
              )}`}
            >
              {getStatusText(verificationStatus)}
            </span>
          </div>
        </div>

        {verificationStatus === "not_submitted" && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-blue-800 mb-1">
                  Verification Required
                </p>
                <p className="text-sm text-blue-700">
                  To become a verified mentor, please upload at least one
                  document proving your student or alumni status. Approved
                  documents include: acceptance letters, diplomas, transcripts,
                  or current student ID.
                </p>
              </div>
            </div>
          </div>
        )}

        {verificationStatus === "approved" && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-green-800 mb-1">
                  Verification Approved
                </p>
                <p className="text-sm text-green-700">
                  Congratulations! Your documents have been verified. You are
                  now a verified mentor and can start receiving student
                  requests.
                </p>
              </div>
            </div>
          </div>
        )}

        {verificationStatus === "rejected" && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-red-800 mb-1">
                  Verification Rejected
                </p>
                <p className="text-sm text-red-700 mb-2">
                  Unfortunately, your documents could not be verified. Please
                  review the reason below and upload new documents.
                </p>
                {rejectionReason && (
                  <div className="bg-red-100 border border-red-200 rounded p-2 mt-2">
                    <p className="text-sm text-red-800">
                      <strong>Reason:</strong> {rejectionReason}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {verificationStatus === "pending" && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-yellow-800 mb-1">
                  Under Review
                </p>
                <p className="text-sm text-yellow-700">
                  Your documents are being reviewed by our team. This typically
                  takes 24-48 hours. We&apos;ll notify you once the review is
                  complete.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Document Upload Area */}
        {verificationStatus !== "approved" && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Documents
            </label>
            <div
              className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                dragActive
                  ? "border-blue-400 bg-blue-50"
                  : "border-gray-300 hover:border-gray-400"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-4" />
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Click to upload</span> or drag and
                drop
              </p>
              <p className="text-xs text-gray-500 mb-4">
                PDF, PNG, JPG up to 10MB
              </p>
              <Input
                type="file"
                multiple
                accept=".pdf,.png,.jpg,.jpeg"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => e.target.files && handleFiles(e.target.files)}
              />
              <Button variant="outline" size="sm">
                Choose Files
              </Button>
            </div>
          </div>
        )}

        {/* Document History */}
        {documents.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-3">
              Document History
            </h4>
            <div className="space-y-3">
              {documents.map((doc, index) => (
                <div
                  key={doc.id}
                  className="flex items-center p-4 border border-gray-200 rounded-lg bg-gray-50"
                >
                  <div className="flex items-center space-x-3 flex-1">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full flex-shrink-0">
                      <span className="text-xs font-medium text-blue-600">
                        {index + 1}
                      </span>
                    </div>
                    <FileText className="w-5 h-5 text-gray-400" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {doc.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {doc.type} • {doc.size} • Uploaded{" "}
                        {new Date(doc.uploadDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3">
              This is your document submission history. All uploaded documents
              are reviewed together for verification.
            </p>
          </div>
        )}

        {/* Acceptable Documents Info */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="text-sm font-medium text-gray-900 mb-2">
            Acceptable Documents
          </h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• University acceptance letter</li>
            <li>• Current student ID card</li>
            <li>• Official transcript</li>
            <li>• Diploma or degree certificate</li>
            <li>• Enrollment verification letter</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">
            Documents are typically reviewed within 24-48 hours. All information
            is kept confidential and secure.
          </p>
        </div>
      </div>
    </div>
  );
}
