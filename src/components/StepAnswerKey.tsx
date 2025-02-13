import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { jsPDF } from "jspdf";
import { getAnswerKey } from "../services/api/getAnswerKey";
import { FormDataType } from "pages/MockPaperCreatorPage";

interface StepAnswerKeyProps {
  formData: FormDataType;
  onBack: () => void;
  content: string;
}

const StepAnswerKey: React.FC<StepAnswerKeyProps> = ({ formData, onBack, content }) => {
  const [answerKey, setAnswerKey] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchAnswerKey = async () => {
    try {
      setLoading(true);
      // Call the API to get the answer key. The service returns a string.
      const answerKeyContent = await getAnswerKey({
        board: formData.board,
        classLevel: formData.classLevel,
        selectedSubjects: formData.selectedSubjects,
        chapter: formData.chapter,
        paperType: formData.paperType,
        hit_count: 0,
        is_logedIn: true,
        question_paper: content,
      });
      setAnswerKey(answerKeyContent);
      toast.success("Answer key loaded successfully!");
    } catch (error) {
      toast.error("Failed to load answer key");
    } finally {
      setLoading(false);
    }
  };

  const generateAnswerKeyPDF = () => {
    if (!answerKey) {
      toast.error("No answer key available");
      return;
    }
    const doc: any = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    let cursorY = margin;

    // Header
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("Answer Key", pageWidth / 2, cursorY, { align: "center" });
    cursorY += 20;

    // Content setup
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");

    // Function to process markdown-style bold text (wrapped in **)
    const processTextWithBold = (text: string) => {
      const regex = /\*\*(.*?)\*\*/g;
      let lastIndex = 0;
      const parts: { text: string; isBold: boolean }[] = [];
      let match;
      while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
          parts.push({
            text: text.substring(lastIndex, match.index),
            isBold: false,
          });
        }
        parts.push({
          text: match[1],
          isBold: true,
        });
        lastIndex = regex.lastIndex;
      }
      if (lastIndex < text.length) {
        parts.push({
          text: text.substring(lastIndex),
          isBold: false,
        });
      }
      return parts;
    };

    const maxWidth = pageWidth - 2 * margin;
    const lines = doc.splitTextToSize(answerKey, maxWidth);
    lines.forEach((line: string) => {
      const parts = processTextWithBold(line);
      parts.forEach((part) => {
        // If the current y position is too close to the bottom, add a new page.
        if (cursorY + 10 > pageHeight - margin) {
          doc.addPage();
          cursorY = margin;
        }
        doc.setFont("helvetica", part.isBold ? "bold" : "normal");
        doc.text(part.text, margin, cursorY);
        cursorY += 10;
      });
    });

    // Footer added to every page.
    const totalPages = doc.internal.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFontSize(10);
      doc.setTextColor(150);
      doc.text(
        "© 2025 Papershapers. All rights reserved.",
        pageWidth / 2,
        pageHeight - 10,
        { align: "center" }
      );
    }

    // Generate and download the PDF.
    const pdfBlob = doc.output("blob");
    const url = URL.createObjectURL(pdfBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "AnswerKey.pdf";
    link.click();
  };

  useEffect(() => {
    fetchAnswerKey();
  }, []);

  return (
    <div className="px-4 md:px-8 min-h-screen flex flex-col items-center justify-center bg-green-50">
      <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-8">
        Answer Key
      </h2>
      <div className="w-full max-w-3xl p-6 bg-white rounded-xl shadow-lg">
        {loading ? (
          <p className="text-green-700">Loading answer key...</p>
        ) : answerKey ? (
          <pre className="whitespace-pre-wrap text-green-700">{answerKey}</pre>
        ) : (
          <p className="text-green-700">
            No answer key loaded. Click the button below to load the answer key.
          </p>
        )}
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
        {!answerKey && (
          <button
            onClick={fetchAnswerKey}
            className="w-full md:w-auto px-8 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-colors"
          >
            {loading ? "Loading..." : "Load Answer Key"}
          </button>
        )}
        {answerKey && (
          <button
            onClick={generateAnswerKeyPDF}
            className="w-full md:w-auto px-8 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-colors"
          >
            Generate Answer Key PDF
          </button>
        )}
        <button
          onClick={onBack}
          className="w-full md:w-auto px-8 py-3 bg-white text-green-600 border border-green-600 rounded-lg shadow-md hover:bg-green-50 transition-colors"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default StepAnswerKey;
