import { useState, useEffect } from "react";
import ImageGrid from "../Images/ImageGrid";
import ImageUploader from "../Images/AddImageModal";
import { getImages, deleteImage } from "../../services/imageService";

interface Image {
  id: number;
  url: string;
}

const ImagesPage = () => {
  const [selectedInstitution, setSelectedInstitution] = useState("");
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    if (selectedInstitution) {
      getImages(selectedInstitution).then(setImages);
    }
  }, [selectedInstitution]);

  const handleDelete = async (id: number) => {
    await deleteImage(id);
    setImages(images.filter(img => img.id !== id));
  };

  return (
    <div className="p-10 mr-12 mt-30 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 pb-5">إدارة الصور</h2>

      <select 
        aria-label="اختر المؤسسة"
        value={selectedInstitution} 
        onChange={(e) => setSelectedInstitution(e.target.value)}
        className="mb-4 p-2 border rounded">
        <option value="">اختر المؤسسة</option>
        <option value="institution1">مؤسسة الامل </option>
        <option value="institution2">مؤسسة النور</option>
        <option value="institution2">جمعية الخير</option>
      </select>

      <ImageGrid images={images} onDelete={handleDelete} />

      <ImageUploader institutionId={selectedInstitution} />
    </div>
  );
};

export default ImagesPage;