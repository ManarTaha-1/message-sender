import React from "react";

interface ImageGridProps {
  images: { id: number; url: string }[];
  onDelete: (id: number) => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, onDelete }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image) => (
        <div key={image.id} className="relative group">
          <img src={image.url} alt="صورة المؤسسة" className="w-full rounded-lg" />
          <div className="absolute inset-0 bg-black bg-opacity-50 hidden group-hover:flex justify-center items-center space-x-4">
            <button onClick={() => window.open(image.url, "_blank")} className="text-white">👁️ See</button>
            <button onClick={() => onDelete(image.id)} className="text-red-500">🗑️ Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
