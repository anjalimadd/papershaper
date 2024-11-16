import React from "react";
import SelectField from "@utils/common/SelectField";
import MultiSelectDropdown from "@components/MultiSelectDropdown";
import { FormDataType } from "@pages/TryDemoPage";

interface Step2Props {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
}

const Step2Details: React.FC<Step2Props> = ({ formData, setFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectionChange = (selected: string[]) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedSubjects: selected,
    }));
  };

  return (
    <>
      <SelectField
        label="Select Board"
        name="board"
        options={["CBSE", "ICSE", "State Board"]}
        value={formData.board}
        onChange={handleChange}
        required
      />
      <SelectField
        label="Select Class"
        name="classLevel"
        options={[
          "Class 8th",
          "Class 9th",
          "Class 10th",
          "Class 11th",
          "Class 12th",
        ]}
        value={formData.classLevel}
        onChange={handleChange}
        required
      />
      <label className="block mb-2 text-gray-700">Select Subjects</label>
      <MultiSelectDropdown
        options={["Maths", "Science", "English", "History"]}
        selectedOptions={formData.selectedSubjects}
        onSelectionChange={handleSelectionChange}
      />
      <SelectField
        label="Select Chapter"
        name="chapter"
        options={["Vector Algebra", "Geometry", "Calculus"]}
        value={formData.chapter}
        onChange={handleChange}
        required
      />
      <SelectField
        label="Type of Paper"
        name="paperType"
        options={["Mock Paper", "Test Questions", "Practice Paper"]}
        value={formData.paperType}
        onChange={handleChange}
        required
      />
    </>
  );
};

export default Step2Details;
