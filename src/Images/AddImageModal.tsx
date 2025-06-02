import React, { useState } from "react";
import { uploadImage } from "../../services/imageService";

interface ImageUploaderProps {
  institutionId: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ institutionId }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files?.[0] || null);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      await uploadImage(institutionId, selectedFile);
      alert("تم رفع الصورة بنجاح!");
    }
  };

  return (
    <div className="mt-4 ">
      <label htmlFor="imageUpload" className="block mb-2 font-bold text-xl">اختر صورة</label>
      <input
        id="imageUpload"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="border p-2 rounded"
        aria-label="اختر صورة للرفع"
      />
      <button onClick={handleUpload} className="ml-2 px-4 py-2 bg-blue-600 text-white rounded mr-2 hover:bg-blue-700 cursor-pointer">رفع الصورة</button>
    </div>
  );
};

export default ImageUploader;
