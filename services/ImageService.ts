const API_BASE_URL = ""; 

export const getImages = async (institutionId: string) => {
  const response = await fetch(`${API_BASE_URL}/images?institution=${institutionId}`);
  return response.ok ? response.json() : [];
};

export const deleteImage = async (imageId: number) => {
  const response = await fetch(`${API_BASE_URL}/images/${imageId}`, { method: "DELETE" });
  return response.ok;
};

export const uploadImage = async (institutionId: string, file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("institution", institutionId);

  const response = await fetch(`${API_BASE_URL}/images/upload`, {
    method: "POST",
    body: formData,
  });

  return response.ok ? response.json() : null;
};