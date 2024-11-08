import React, { useState } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { toast } from "react-toastify";
import StepIndicator from "@components/StepIndicator";
import MultiSelectDropdown from "@components/MultiSelectDropdown";

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);

  // Step 1: General Details
  const [reason, setReason] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Step 2: Board, Class, Subjects
  const [board, setBoard] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  const handleNext = () => {
    if (step === 1 && !reason) {
      toast.error("Please provide a reason for creating the mock paper.");
      return;
    }
    setStep(step + 1);
  };

  const handlePrevious = () => setStep(step - 1);

  const handleGenerate = () => {
    toast.success("Mock paper generated successfully!");
    setStep(3); // Move to generated paper view
  };

  const handleSelectionChange = (selected: string[]) => {
    setSelectedSubjects(selected);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-100 shadow-md">
      <Header />
      <main className="flex-1 flex flex-col items-center py-8 px-4">
        {/* Heading and Line */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold text-green-800 mb-2">
            Create Your Mock Paper
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Follow the steps below to complete the setup
          </p>
          <div className="w-3/4 mx-auto h-1 rounded-full bg-gradient-to-r from-green-500 to-blue-500 shadow-lg"></div>
        </div>

        <StepIndicator currentStep={step} />

        <div className="max-w-3xl w-full p-8">
          {step === 1 && (
            <div>
              <label className="block mb-2 text-gray-700">
                Reason for Creating Mock Paper
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 bg-gray-50 mb-6"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Why do you want to create a mock paper?"
                required
              />

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-gray-700">First Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 bg-gray-50 mb-6"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-700">Last Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 bg-gray-50 mb-6"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-gray-700">Gender</label>
                  <select
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 bg-gray-50 mb-6"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 bg-gray-50 mb-6"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <label className="block mb-2 text-gray-700">Phone Number</label>
              <input
                type="tel"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 bg-gray-50 mb-6"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          )}

          {step === 2 && (
            <div>
              <label className="block mb-2 text-gray-700">Select Board</label>
              <select
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 bg-gray-50 mb-6"
                value={board}
                onChange={(e) => setBoard(e.target.value)}
                required
              >
                <option value="">Choose Board</option>
                <option value="CBSE">CBSE</option>
                <option value="ICSE">ICSE</option>
                <option value="State">State Board</option>
              </select>

              <label className="block mb-2 text-gray-700">Select Class</label>
              <select
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 bg-gray-50 mb-6"
                value={classLevel}
                onChange={(e) => setClassLevel(e.target.value)}
                required
              >
                <option value="">Choose Class</option>
                <option value="10">Class 8</option>
                <option value="12">Class 9</option>
                <option value="10">Class 10</option>
                <option value="12">Class 11</option>
              </select>

              <label className="block mb-2 text-gray-700">
                Select Subjects
              </label>
              <MultiSelectDropdown
                options={["Math", "Science", "English", "History"]}
                selectedOptions={selectedSubjects}
                onSelectionChange={handleSelectionChange}
              />
              {/* <p className="mt-4 text-gray-600">
                Selected: {selectedSubjects.join(", ") || "None"}
              </p> */}
            </div>
          )}

          {step === 3 && (
            <div className="text-center text-gray-700">
              <h2 className="text-2xl font-semibold">Mock Paper Generated</h2>
              <p className="mt-4">
                You can now download or review your generated mock paper.
              </p>
              {/* Display generated paper details or download button here */}
            </div>
          )}

          {/* Navigation Buttons */}
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
