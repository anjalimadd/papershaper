import { Player } from "@lottiefiles/react-lottie-player";
import { FormDataType } from "pages/TryDemoPage";

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
  const generateFileName = () => {
    const cleanString = (str: string) =>
      str.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_]/g, "");

    return `MockPaper_${cleanString(formData.board)}_${cleanString(
      formData.classLevel
    )}_${cleanString(formData.selectedSubjects)}_${cleanString(
      formData.chapter
    )}.pdf`;
  };

  const downloadPDF = () => {
    if (pdfUrl) {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = generateFileName();
      link.click();
    }
  };

  return (
    <div className="px-4 md:px-8 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 py-4">
        {pdfUrl && "Your Mock Paper is Ready!"}
      </h2>

      {loading ? (
        <div className="py-12">
          <Player
            src="/src/assets/lottie/loading.json"
            className="w-48 h-48 mx-auto"
            autoplay
            loop
          />
          <div className="mt-6 text-lg text-gray-600">
            <p className="animate-pulse">Crafting your perfect mock paper...</p>
            <p className="text-sm mt-2">This usually takes 15-20 seconds</p>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-8">
          {/* Left side: Summary */}
          {!pdfUrl && <div className="w-full p-6 md:p-8 bg-white rounded-xl shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 border-b pb-3 mb-6">
              Your Selection Summary
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="font-medium text-gray-700">Education Board:</p>
                <p className="text-gray-600 mt-1">{formData.board}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="font-medium text-gray-700">Class Level:</p>
                <p className="text-gray-600 mt-1">{formData.classLevel}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="font-medium text-gray-700">Subjects:</p>
                <p className="text-gray-600 mt-1">{formData.selectedSubjects}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="font-medium text-gray-700">Chapter:</p>
                <p className="text-gray-600 mt-1">{formData.chapter}</p>
              </div>
            </div>

            {/* Generate Paper Button (Right side when no PDF) */}
            {!pdfUrl && (
              <div className="mt-8 flex justify-end">
                <button
                  onClick={onGenerate}
                  disabled={loading}
                  className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg shadow-lg hover:from-green-700 hover:to-blue-700 transition-all"
                >
                  {loading ? "Generating..." : "Generate Paper"}
                </button>
              </div>
            )}
          </div>}

          {/* Right side: PDF Preview */}
          {pdfUrl && (
            <div className="w-full p-6 md:p-8 bg-white rounded-xl shadow-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Preview Your Paper
              </h3>
              <div className="relative h-[60vh] lg:h-[90vh] bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                <iframe
                  src={`${pdfUrl}#toolbar=0&navpanes=0&view=FitH`}
                  className="w-full h-full border-0"
                  title="PDF Preview"
                />
                <div className="absolute inset-0 border-4 border-green-500/20 pointer-events-none rounded-lg" />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Buttons (Bottom when PDF is previewed) */}
      {pdfUrl && (
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
          <button
            onClick={downloadPDF}
            className="px-8 py-3 text-white rounded-lg bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download PDF
          </button>
          <button
            onClick={() => window.location.replace("/try-demo")}
            className="px-8 py-3 bg-gray-100 text-gray-700 rounded-lg shadow-lg hover:bg-gray-200 transition-colors"
          >
            Generate Another Paper
          </button>
        </div>
      )}
    </div>
  );
};

export default Step3Confirmation;