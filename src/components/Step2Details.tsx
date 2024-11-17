import React, { useEffect, useState } from "react";
import SelectField from "@utils/common/SelectField";
import MultiSelectDropdown from "@components/MultiSelectDropdown";
import { FormDataType } from "@pages/TryDemoPage";
import classData from "@data/classData.json";
interface Step2Props {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
  onPrevious: () => void;
  onNext: () => void;
}

const Step2Details: React.FC<Step2Props> = ({
  formData,
  setFormData,
  onPrevious,
  onNext,
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [availableSubjects, setAvailableSubjects] = useState<string[]>([]);
  const [availableChapters, setAvailableChapters] = useState<string[]>([]);

  // Update subjects and chapters when classLevel changes
  useEffect(() => {
    if (formData.classLevel && classData[formData.classLevel]) {
      const subjects = classData[formData.classLevel].subjects;
      setAvailableSubjects(subjects);
      setFormData((prevData) => ({
        ...prevData,
        selectedSubjects: [], // Reset selected subjects when class changes
        chapter: "", // Reset chapter when class changes
      }));

      // Automatically update available chapters for the first subject
      if (subjects.length > 0) {
        const firstSubject = subjects[0];

        // Assert that `chapters` is an object that may have `firstSubject` as a key
        const chapters =
          (
            classData[formData.classLevel]?.chapters as Record<string, string[]>
          )[firstSubject] || [];

        setAvailableChapters(chapters);
      }
    }
  }, [formData.classLevel, setFormData]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const validateFields = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.board) newErrors.board = "Board selection is required.";
    if (!formData.classLevel)
      newErrors.classLevel = "Class selection is required.";
    if (!formData.selectedSubjects || formData.selectedSubjects.length === 0) {
      newErrors.selectedSubjects = "At least one subject must be selected.";
    }
    if (!formData.chapter) newErrors.chapter = "Chapter selection is required.";
    if (!formData.paperType)
      newErrors.paperType = "Paper type selection is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    if (validateFields()) {
      onNext(); // Only navigate to the next step if validation passes
    }
  };

  const handleSubjectChange = (selected: string[]) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedSubjects: selected,
    }));
    if (selected.length > 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        selectedSubjects: "",
      }));
    }

    // Update chapters based on selected subjects
    if (selected.length > 0) {
      const firstSelectedSubject = selected[0];
      const classLevel = formData.classLevel as keyof typeof classData;

      // Using a type assertion here to specify the expected structure of chapters
      const chapters =
        (classData[classLevel]?.chapters as Record<string, string[]>)[
          firstSelectedSubject
        ] || [];
      setAvailableChapters(chapters);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <SelectField
          label="Select Board"
          name="board"
          options={["CBSE", "ICSE", "State Board"]}
          value={formData.board}
          onChange={handleChange}
        />
        {errors.board && (
          <p className="text-red-500 text-sm mt-2">{errors.board}</p>
        )}
      </div>
      <div className="mb-4">
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
        />
        {errors.classLevel && (
          <p className="text-red-500 text-sm mt-2">{errors.classLevel}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700">Select Subjects</label>
        <MultiSelectDropdown
          options={availableSubjects}
          selectedOptions={formData.selectedSubjects}
          onSelectionChange={handleSubjectChange}
        />
        {errors.selectedSubjects && (
          <p className="text-red-500 text-sm">{errors.selectedSubjects}</p>
        )}
      </div>
      <div className="mb-4">
        <SelectField
          label="Select Chapter"
          name="chapter"
          options={availableChapters}
          value={formData.chapter}
          onChange={handleChange}
        />
        {errors.chapter && (
          <p className="text-red-500 text-sm mt-2">{errors.chapter}</p>
        )}
      </div>
      <div className="mb-4">
        <SelectField
          label="Type of Paper"
          name="paperType"
          options={["Mock Paper", "Test Questions", "Practice Paper"]}
          value={formData.paperType}
          onChange={handleChange}
        />
        {errors.paperType && (
          <p className="text-red-500 text-sm mt-2">{errors.paperType}</p>
        )}
      </div>
      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={onPrevious}
          className="py-2 px-6 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
        >
          Previous
        </button>
        <button
          type="submit"
          className="py-2 px-6 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Step2Details;
