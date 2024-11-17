import React, { useState } from "react";
import Header from "@components/Header";
import { jsPDF } from "jspdf";
import Footer from "@components/Footer";
import { toast } from "react-toastify";
import { getValue } from "@services/api/getValue";
import StepIndicator from "@components/StepIndicator";
import Step1GeneralDetails from "@components/Step1GeneralDetails";
import Step2Details from "@components/Step2Details";
import Step3Confirmation from "@components/Step3Confirmation";

export interface FormDataType {
  reason?: string | undefined;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  phone: string;
  board: string;
  classLevel: "Class 9th" | "Class 10th" | "Class 11th" | "Class 12th";
  selectedSubjects: string[];
  chapter: string;
  paperType: string;
}

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormDataType>({
    reason: "",
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phone: "",
    board: "",
    classLevel: "Class 9th",
    selectedSubjects: [],
    chapter: "",
    paperType: "",
  });
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const handleNext = () => {
    if (step === 1 && !formData.reason) {
      toast.error("Please provide a reason for creating the mock paper.");
      return;
    }
    setStep(step + 1);
  };

  const handlePrevious = () => setStep(step - 1);

  const handleGenerate = async () => {
    try {
      // Simulate API call
      const res = await getValue();
      console.log("API response:", res);

      // Parse content from the response
      const content = res.result ?? "";

      // Initialize jsPDF document
      const doc = new jsPDF();

      // Header
      doc.setFontSize(16);
      doc.text("Sample Mock Paper", 10, 10);
      doc.setFontSize(12);
      doc.text(`Board: ${formData.board}`, 10, 20);
      doc.text(`Class: ${formData.classLevel}`, 10, 30);
      doc.text(`Subjects: ${formData.selectedSubjects.join(", ")}`, 10, 40);
      doc.text(`Chapter: ${formData.chapter}`, 10, 50);

      // Adding a line break before content
      doc.setFontSize(12);
      doc.text(content, 10, 60, { maxWidth: 180 }); // Adjust maxWidth for line wrapping

      // Generate Blob URL for preview
      const pdfBlob = doc.output("blob");
      const pdfUrl = URL.createObjectURL(pdfBlob);
      setPdfUrl(pdfUrl);

      toast.success("Mock paper generated successfully!");
      setStep(3);
    } catch (error) {
      toast.error("Failed to generate mock paper. Please try again.");
      console.error("API error:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col items-center py-10 px-4 bg-gray-100">
        <StepIndicator currentStep={step} />
        <div className="max-w-3xl w-full p-8">
          {step === 1 && (
            <Step1GeneralDetails
              formData={formData}
              setFormData={setFormData}
              onNext={handleNext}
            />
          )}
          {step === 2 && (
            <Step2Details
              formData={formData}
              setFormData={setFormData}
              onPrevious={handlePrevious}
              onNext={handleNext}
            />
          )}
          {step === 3 && (
            <Step3Confirmation
              formData={formData}
              onPrevious={handlePrevious}
              onGenerate={handleGenerate}
              pdfUrl={pdfUrl}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MultiStepForm;
