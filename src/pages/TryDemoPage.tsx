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
  classLevel: "Class 9th" | "Class 10th" | "Class 11th" | "Class 12th" | "";
  selectedSubjects: string;
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
    classLevel: "",
    selectedSubjects: "",
    chapter: "",
    paperType: "",
  });
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

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
      setLoading(true);
      const payload = {
        board: formData?.board,
        classLevel: formData.classLevel,
        selectedSubjects: formData.selectedSubjects,
        chapter: formData.chapter,
        paperType: formData.paperType,
        hit_count: 2,
        is_logedIn: "True",
      };

      const res = await getValue(payload);
      setLoading(false);

      const content = res.result ?? "";

      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.width;
      const pageHeight = doc.internal.pageSize.height;
      const marginLeft = 20;
      const marginTop = 30;
      const lineHeight = 10;
      const maxWidth = pageWidth - 2 * marginLeft;
      let cursorY = marginTop;

      // Header
      doc.setFontSize(18);
      doc.setFont("helvetica", "bold");
      doc.text("Sample Mock Paper", pageWidth / 2, cursorY, {
        align: "center",
      });
      cursorY += lineHeight * 2;

      // Function to process and apply bold to text enclosed by `**`
      const processTextWithBold = (text: string) => {
        const regex = /\*\*(.*?)\*\*/g;
        let lastIndex = 0;
        const textWithFormatting = [];

        let match;
        while ((match = regex.exec(text)) !== null) {
          if (match.index > lastIndex) {
            textWithFormatting.push({
              text: text.substring(lastIndex, match.index),
              isBold: false,
            });
          }

          textWithFormatting.push({ text: match[1], isBold: true });

          lastIndex = regex.lastIndex;
        }

        if (lastIndex < text.length) {
          textWithFormatting.push({
            text: text.substring(lastIndex),
            isBold: false,
          });
        }

        return textWithFormatting;
      };

      doc.setFontSize(12);
      const textLines = doc.splitTextToSize(content, maxWidth);

      textLines.forEach((line: string) => {
        const formattedText = processTextWithBold(line);

        formattedText.forEach((part) => {
          if (cursorY + lineHeight > pageHeight - 20) {
            doc.addPage();
            cursorY = marginTop;
          }

          doc.setFont(
            part.isBold ? "helvetica" : "helvetica",
            part.isBold ? "bold" : "normal"
          );

          doc.text(part.text, marginLeft, cursorY);
          cursorY += lineHeight;
        });
      });

      const pdfBlob = doc.output("blob");
      const pdfUrl = URL.createObjectURL(pdfBlob);
      setPdfUrl(pdfUrl);

      toast.success("Mock paper generated successfully!");
      setStep(3);
    } catch (error) {
      setLoading(false);
      console.error("Error generating mock paper:", error);
      toast.error("Failed to generate mock paper. Please try again.");
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
              onGenerate={handleGenerate}
              pdfUrl={pdfUrl}
              loading={loading}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MultiStepForm;
