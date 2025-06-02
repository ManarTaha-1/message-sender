import { sendMessage } from "../../services/messageService";
import MessageForm from "../Messages/MessageForm";

const MessagePage = () => {
  const handleSendMessage = async (data: { institution: string; file: File | null; date: string; whatsappTemplateId: string; smsTemplateId: string; phoneNumber: string }) => {
    await sendMessage(data);
    alert("تم إرسال الرسائل بنجاح!");
  };

  return (
    <div className="p-4">
      <MessageForm onSubmit={handleSendMessage} />
    </div>
  );
};

export default MessagePage;
