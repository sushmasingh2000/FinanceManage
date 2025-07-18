import React, { useState } from 'react';

function UploadReceipt() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [extractedText, setExtractedText] = useState(''); // For OCR result

  const handleFileChange = (e) => {
    const uploaded = e.target.files[0];
    setFile(uploaded);

    if (uploaded && uploaded.type.startsWith('image')) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewUrl(reader.result);
      reader.readAsDataURL(uploaded);
    } else {
      setPreviewUrl('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) return alert('Please upload a file');

    console.log('File ready to upload:', file);

    // OCR logic backend se ya tesseract.js se connect karenge baad me
    setExtractedText('Amount: ₹250\nDate: 2025-07-10\nDescription: Lunch at cafe');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Upload Receipt</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          accept="image/*,application/pdf"
          onChange={handleFileChange}
          className="block w-full text-gray-700 border border-gray-300 rounded cursor-pointer
                     file:bg-blue-600 file:text-white file:px-4 file:py-2 file:border-none
                     hover:file:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Upload
        </button>
      </form>

      {previewUrl && (
        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Preview:</h4>
          <img
            src={previewUrl}
            alt="receipt preview"
            className="max-w-full rounded border border-gray-300 shadow-sm"
          />
        </div>
      )}

      {extractedText && (
        <div className="mt-6 bg-gray-50 p-4 rounded border border-gray-200 whitespace-pre-wrap text-gray-700">
          <h4 className="text-lg font-semibold mb-2">Extracted Text:</h4>
          <pre>{extractedText}</pre>
        </div>
      )}
    </div>
  );
}

export default UploadReceipt;
