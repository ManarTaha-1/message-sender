const API_BASE_URL = ""; 

export const sendMessage = async (data: { institution: string; file: File | null; date: string; whatsappTemplateId: string; smsTemplateId: string; phoneNumber: string }) => {
  const formData = new FormData();
  formData.append("institution", data.institution);
  formData.append("date", data.date);
  formData.append("whatsappTemplateId", data.whatsappTemplateId);
  formData.append("smsTemplateId", data.smsTemplateId);
  formData.append("phoneNumber", data.phoneNumber);
  
  if (data.file) {
    formData.append("file", data.file);
  }

  const response = await fetch(`${API_BASE_URL}/messages/send`, {
    method: "POST",
    body: formData,
  });

  return response.ok ? response.json() : null;
};
