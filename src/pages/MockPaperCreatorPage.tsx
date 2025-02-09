import React, { useState } from "react";
import Header from "../components/Header";
import { jsPDF } from "jspdf";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import { getValue } from "../services/api/getValue";
import StepIndicator from "../components/StepIndicator";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Step2Confirmation from "../components/Step2Confirmation";
import Step1Details from "components/Step1Details";
import StepAnswerKey from "components/StepAnswerKey";

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
  phoneNumber?: string;
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
    board: "CBSE",
    classLevel: "",
    selectedSubjects: "",
    chapter: "",
    paperType: "",
  });
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<string>("");

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setFormData({
      reason: "",
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      phone: "",
      board: "CBSE",
      classLevel: "",
      selectedSubjects: "",
      chapter: "",
      paperType: "",
    });
    setStep(1);
  };

  const handleGenerate = async () => {
    try {
      setLoading(true);
      const payload = {
        board: formData.board,
        classLevel: formData.classLevel,
        selectedSubjects: formData.selectedSubjects,
        chapter: formData.chapter,
        paperType: formData.paperType,
        hit_count: 0,
        is_logedIn: "True",
      };

      const res = await getValue(payload);
      setLoading(false);

      const content = res.result ?? "";
      setQuestions(content);

      let doc: any = new jsPDF();
      const pageWidth = doc.internal.pageSize.width;
      const pageHeight = doc.internal.pageSize.height;
      const marginLeft = 20;
      const marginTop = 30;
      const lineHeight = 10;
      const maxWidth = pageWidth - 2 * marginLeft;
      let cursorY = marginTop;

      doc.setFontSize(18);
      doc.setFont("helvetica", "bold");
      doc.text("Sample Mock Paper", pageWidth / 2, cursorY, { align: "center" });
      cursorY += lineHeight * 2;

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
          doc.setFont("helvetica", part.isBold ? "bold" : "normal");
          doc.text(part.text, marginLeft, cursorY);
          cursorY += lineHeight;
        });
      });

      const totalPages = doc.internal.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        doc.setFontSize(10);
        doc.setTextColor(150);
        doc.text("© 2025 Papershapers. All rights reserved.", pageWidth / 2, pageHeight - 10, { align: "center" });
      }

      const pdfBlob = doc.output("blob");
      const pdfUrl = URL.createObjectURL(pdfBlob);
      setPdfUrl(pdfUrl);

      toast.success("Mock paper generated successfully!");
    } catch (error) {
      setLoading(false);
      console.error("Error generating mock paper:", error);
      toast.error("Failed to generate mock paper. Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col items-center py-10 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-3xl w-full text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full mb-6">
            <SparklesIcon className="w-12 h-12 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-emerald-700">
            AI-Powered Mock Paper Generator
          </h1>
          <p className="text-lg text-green-800 font-medium">
            Create customized exam papers tailored to your specific needs.
            Select your class, subject, and chapter to generate practice materials instantly.
          </p>
        </div>

        <StepIndicator currentStep={step} />
        <div className="max-w-3xl w-full p-4 bg-white rounded-2xl shadow-lg">
          {step === 1 && (
            <Step1Details
              formData={formData}
              setFormData={setFormData}
              onNext={handleNext}
            />
          )}
          {step === 2 && (
            <Step2Confirmation
              formData={formData}
              onGenerate={handleGenerate}
              pdfUrl={pdfUrl}
              loading={loading}
              onNext={handleNext}
            />
          )}

          {step ===3 && <StepAnswerKey formData={formData} content={questions} onBack={handleBack} />}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MultiStepForm;
