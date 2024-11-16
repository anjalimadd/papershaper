import { FormDataType } from "@pages/TryDemoPage";
import InputField from "@utils/common/InputField";
import SelectField from "@utils/common/SelectField";
import React from "react";

interface Step1Props {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
}

const Step1GeneralDetails: React.FC<Step1Props> = ({
  formData,
  setFormData,
}) => {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(
      (prevData: FormDataType) =>
        ({ ...prevData, [name]: value }) as FormDataType
    );
  };

  return (
    <div>
      <InputField
        label="Reason for Creating Mock Paper"
        name="reason"
        type="textarea"
        value={formData.reason || ""}
        onChange={handleChange}
        required
      />
      <div className="grid grid-cols-2 gap-6">
        <InputField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <InputField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <SelectField
          label="Gender"
          name="gender"
          options={["Male", "Female", "Other"]}
          value={formData.gender}
          onChange={handleChange}
          required
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <InputField
        label="Phone Number"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default Step1GeneralDetails;
