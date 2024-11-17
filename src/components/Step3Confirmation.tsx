import { FormDataType } from "@pages/TryDemoPage";

interface Step3Props {
  formData: FormDataType;
  onPrevious: () => void;
  pdfUrl: string | null;
  onGenerate: () => void;
}

const Step3Confirmation: React.FC<Step3Props> = ({
  formData,
  onPrevious,
  pdfUrl,
  onGenerate,
}) => {
  const downloadPDF = () => {
    if (pdfUrl) {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "Mock_Paper.pdf";
      link.click();
    }
  };

  return (
    <div className="text-center text-gray-700">
      <h2 className="text-2xl font-semibold">Mock Paper Generated</h2>
      <p className="mt-4">
        You can now download or review your generated mock paper.
      </p>

      {/* Display selected options */}
      <div className="text-center mt-6">
        <h3 className="text-lg font-semibold">Selected Options</h3>
        <p>Board: {formData.board}</p>
        <p>Class: {formData.classLevel}</p>
        <p>Subjects: {formData.selectedSubjects.join(", ")}</p>
        <p>Chapter: {formData.chapter}</p>
      </div>

      {/* PDF Preview */}
      {pdfUrl && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">PDF Preview</h3>
          <iframe
            src={pdfUrl}
            width="100%"
            height="500px"
            className="border"
            title="Mock Paper Preview"
          />
        </div>
      )}

      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={onPrevious}
          className="py-2 px-6 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
        >
          Previous
        </button>
        {!pdfUrl ? (
          <button
            type="button"
            onClick={onGenerate}
            className="py-2 px-6 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Generate Mock Paper
          </button>
        ) : (
          <button
            type="button"
            onClick={downloadPDF}
            className="py-2 px-6 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Download PDF
          </button>
        )}
      </div>
    </div>
  );
};

export default Step3Confirmation;
