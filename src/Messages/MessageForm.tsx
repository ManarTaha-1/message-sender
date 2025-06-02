import { useState } from "react";

interface MessageFormProps {
  onSubmit: (data: { institution: string; file: File | null; date: string; whatsappTemplateId: string; smsTemplateId: string; phoneNumber: string }) => void;
}

const MessageForm: React.FC<MessageFormProps> = ({ onSubmit }) => {
  const [selectedInstitution, setSelectedInstitution] = useState("");
  const [date, setDate] = useState("");
  const [whatsappTemplateId, setWhatsappTemplateId] = useState("");
  const [smsTemplateId, setSmsTemplateId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [csvFile, setCsvFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ institution: selectedInstitution, file: csvFile, date, whatsappTemplateId, smsTemplateId, phoneNumber });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-10 rounded shadow-md mt-15">
      <h2 className="text-xl font-bold mb-4">تجهيز الرسائل</h2>

      <select 
        value={selectedInstitution} 
        onChange={(e) => setSelectedInstitution(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
        aria-label="اختيار المؤسسة"
      >
        <option value="">اختر المؤسسة</option>
        <option value="institution1">مؤسسة الامل </option>
        <option value="institution2">مؤسسة النور</option>
        <option value="institution2">جمعية الخير</option>
      </select>

      <label htmlFor="csvFile" className="block mb-2 font-bold">رفع ملف CSV</label>
      <input 
        id="csvFile"
        type="file" 
        accept=".csv" 
        onChange={(e) => setCsvFile(e.target.files?.[0] || null)}
        className="mb-4 border p-2 rounded w-full"
        title="اختر ملف CSV"
      />

      <label htmlFor="dateInput" className="block mb-2 font-bold">اختيار التاريخ</label>
      <input 
        id="dateInput"
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)}
        className="mb-4 border p-2 rounded w-full"
        min={new Date().toISOString().split("T")[0]} 
        title="اختيار التاريخ"
      />

      <input 
        type="text" 
        value={whatsappTemplateId} 
        onChange={(e) => setWhatsappTemplateId(e.target.value)}
        className="mb-4 border p-2 rounded w-full"
        placeholder="معرّف قالب واتساب"
      />
      <input 
        type="text" 
        value={smsTemplateId} 
        onChange={(e) => setSmsTemplateId(e.target.value)}
        className="mb-4 border p-2 rounded w-full"
        placeholder="معرّف رسالة SMS"
      />

      <input 
        type="text" 
        value={phoneNumber} 
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="mb-4 border p-2 rounded w-full"
        placeholder="رقم الهاتف (8 أرقام فقط)"
        pattern="[0-9]{8}"
        maxLength={8}
      />

      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer">
        إرسال الرسائل
      </button>
    </form>
  );
};

export default MessageForm;
