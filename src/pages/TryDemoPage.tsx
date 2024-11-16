import React, { useState } from "react";
import Header from "@components/Header";
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
  classLevel: string;
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
    classLevel: "",
    selectedSubjects: [],
    chapter: "",
    paperType: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const incrementHitCount = () => {
    const hitCount = parseInt(sessionStorage.getItem("hit_count") || "0", 10);
    sessionStorage.setItem("hit_count", (hitCount + 1).toString());
    return hitCount + 1;
  };

  const handleNext = () => {
    if (step === 1 && !formData.reason) {
      toast.error("Please provide a reason for creating the mock paper.");
      return;
    }
    setStep(step + 1);
  };

  const handlePrevious = () => setStep(step - 1);

  const handleGenerate = async () => {
    // hit_count: incrementHitCount(),

    try {
      const res = await getValue();
      console.log("res", res);

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
            />
          )}
          {step === 2 && (
            <Step2Details formData={formData} setFormData={setFormData} />
          )}
          {step === 3 && <Step3Confirmation />}

          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="py-2 px-6 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                Previous
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="py-2 px-6 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all"
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                onClick={handleGenerate}
                className="py-2 px-6 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all"
              >
                Generate Mock Paper
              </button>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MultiStepForm;
