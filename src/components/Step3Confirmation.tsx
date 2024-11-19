import { Player } from "@lottiefiles/react-lottie-player";
import { FormDataType } from "@pages/TryDemoPage";

interface Step3Props {
  formData: FormDataType;
  pdfUrl: string | null;
  onGenerate: () => void;
  loading: boolean;
}

const Step3Confirmation: React.FC<Step3Props> = ({
  formData,
  pdfUrl,
  onGenerate,
  loading,
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
    <div className="px-8 min-h-screen ">
      <div className="max-w-3xl mx-auto text-center text-gray-700">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          Mock Paper Generated
        </h2>
        <p className="mt-4 text-lg text-gray-500 mb-8">
          You can now download or review your generated mock paper.
        </p>

        {/* Display selected options */}
        {loading ? (
          <>
            <Player
              src="/src/assets/lottie/loading.json" // Ensure this path is correct
              className="w-36 h-36"
              autoplay
              loop
            />
            <div className="mt-4 text-lg text-gray-600">
              <p>Please wait, generating your mock paper...</p>
              <p>This may take a moment.</p>
            </div>
          </>
        ) : (
          <div className="bg-gray-200/10 mt-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Selected Options
            </h3>
            <>
              <div className="space-y-2 mx-auto text-lg text-gray-700">
                <p>
                  <strong>Board:</strong> {formData.board}
                </p>
                <p>
                  <strong>Class:</strong> {formData.classLevel}
                </p>
                <p>
                  <strong>Subjects:</strong> {formData.selectedSubjects}
                </p>
                <p>
                  <strong>Chapter:</strong> {formData.chapter}
                </p>
              </div>
              {/* PDF Preview */}
              {pdfUrl && (
                <div className="mt-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    PDF Preview
                  </h3>
                  <iframe
                    src={pdfUrl}
                    width="100%"
                    height="900vh" // Full viewport height
                    className="border border-gray-300 rounded-xl shadow-lg"
                    title="Mock Paper Preview"
                  />
                </div>
              )}
            </>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex justify-between mt-10 space-x-6">
          {/* Action buttons */}
          <div className="flex justify-center mt-10 space-x-6">
            {!pdfUrl ? (
              <button
                type="button"
                onClick={onGenerate}
                disabled={loading}
                className="py-3 px-6 sm:ml-56 bg-green-500 text-white rounded-lg"
              >
                Generate Mock Paper
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={downloadPDF}
                  className="py-3 px-6 sm:ml-56 bg-green-500 text-white rounded-lg"
                >
                  Download PDF
                </button>
              </>
            )}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3Confirmation;
