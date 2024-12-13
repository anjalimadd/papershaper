/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import InputField from "@utils/common/InputField";
import SelectField from "@utils/common/SelectField";
import { FormDataType } from "@pages/TryDemoPage";
import { toast } from "react-toastify";
import axios from "axios";

interface Step1Props {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
  onNext: () => void;
}

const Step1GeneralDetails: React.FC<Step1Props> = ({
  formData,
  setFormData,
  onNext,
}) => {
  // **Added Loading State**
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData: FormDataType) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = async () => {
    // Validate required fields on the client-side
    const { firstName, email, gender, phoneNumber, reason } = formData;

    if (!firstName || !email || !gender || !phoneNumber || !reason) {
      toast.error("Please fill out all required fields.");
      return;
    }

    // **Set Loading to True Before API Call**
    setIsLoading(true);

    try {
      // Prepare the data to send
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        gender: formData.gender,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        reason: formData.reason,
      };

      // Make the POST request to Google Apps Script
      const response = await axios.post("/api/append-data", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Check the response status
      if (response.data.status === "success") {
        // Optionally show a success toast
        // toast.success("Your details have been submitted successfully!");
        onNext();
      } else {
        toast.error(
          response.data.message || "There was an error submitting your details."
        );
      }
    } catch (error: any) {
      console.error("Error submitting form data:", error);
      toast.error(
        error.response?.data?.message ||
          "An unexpected error occurred. Please try again later."
      );
    } finally {
      // **Set Loading to False After API Call**
      setIsLoading(false);
      console.log("Inside finally");
    }
  };

  return (
    <div>
      <InputField
        label="Reason for Creating Mock Paper"
        name="reason"
        type="textarea"
        value={formData.reason || ""} // **Ensure value is not undefined**
        onChange={handleChange}
        required
      />
      <div className="grid grid-cols-2 gap-6">
        <InputField
          label="First Name"
          name="firstName"
          value={formData.firstName || ""} // **Ensure value is not undefined**
          onChange={handleChange}
          required
        />
        <InputField
          label="Last Name"
          name="lastName"
          value={formData.lastName || ""} // **Ensure value is not undefined**
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <SelectField
          label="Gender"
          name="gender"
          options={["Male", "Female", "Other"]}
          value={formData.gender || ""} // **Ensure value is not undefined**
          onChange={handleChange}
          required
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          value={formData.email || ""} // **Ensure value is not undefined**
          onChange={handleChange}
          required
        />
      </div>
      <InputField
        label="Phone Number"
        name="phoneNumber" // Changed from 'phone' to 'phoneNumber'
        type="tel"
        value={formData.phoneNumber || ""} // **Fix: Ensure phoneNumber is not undefined**
        onChange={handleChange}
        required
      />
      <button
        type="button"
        onClick={handleNext}
        className={`mt-4 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-opacity duration-300 ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isLoading} // **Disable button when loading**
      >
        {isLoading ? (
          // **Loading Indicator Inside Button**
          <span className="flex items-center">
            <svg
              className="animate-spin h-5 w-5 mr-3 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            Processing...
          </span>
        ) : (
          "Next"
        )}
      </button>
    </div>
  );
};

export default Step1GeneralDetails;
