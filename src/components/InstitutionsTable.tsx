import { useState } from 'react';
import { Edit, Eye, Check, Plus, Loader2 } from 'lucide-react';
import Modal from './Modal';

type Institution = {
  id: number;
  name: string;
  phone: string;
  active: boolean;
};

const InstitutionsTable = () => {
  const [institutions, setInstitutions] = useState<Institution[]>([
    { id: 1, name: 'مؤسسة النور', phone: '0123456789', active: true },
    { id: 2, name: 'مدرسة الأمل', phone: '0111223344', active: false },
    { id: 3, name: 'جمعية الخير', phone: '0100998877', active: false },
  ]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showActivateModal, setShowActivateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedInstitution, setSelectedInstitution] = useState<Institution | null>(null);
  const [loading, setLoading] = useState(false);

  const handleActivate = (institution: Institution) => {
    setSelectedInstitution(institution);
    setShowActivateModal(true);
  };

  const handleEdit = (institution: Institution) => {
    setSelectedInstitution(institution);
    setShowEditModal(true);
  };

  const handleViewDetails = (institution: Institution) => {
    setSelectedInstitution(institution);
    setShowDetailsModal(true);
  };


  return (
    <div className="bg-white p-10 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">قائمة المؤسسات</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
          disabled={loading}
        >
          {loading ? <Loader2 className="animate-spin" /> : <Plus size={18} />}
          إضافة مؤسسة
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 text-right">
              <th className="p-3">اسم المؤسسة</th>
              <th className="p-3">رقم الهاتف</th>
              <th className="p-3">الحالة</th>
              <th className="p-3">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {institutions.map((inst) => (
              <tr key={inst.id} className="border-b border-gray-300 hover:bg-gray-50">
                <td className="p-3">{inst.name}</td>
                <td className="p-3">{inst.phone}</td>
                <td className="p-3">
                  {inst.active ? (
                    <span className="flex items-center text-green-600 font-bold">
                      <Check className="ml-1" /> مفعلة
                    </span>
                  ) : (
                    <button
                      onClick={() => handleActivate(inst)}
                      className="text-blue-600 hover:underline cursor-pointer font-bold "
                      disabled={loading}
                    >
                      تفعيل
                    </button>
                  )}
                </td>
                <td className="p-3 flex gap-2 justify-start">
                  <button 
                    onClick={() => handleEdit(inst)}
                    className="text-gray-500 hover:text-blue-600"
                    disabled={loading}
                    aria-label="تعديل المؤسسة"
                  >
                    <Edit size={18} />
                  </button>
                  <button 
                    onClick={() => handleViewDetails(inst)}
                    className="text-gray-500 hover:text-green-600"
                    disabled={loading}
                    aria-label="عرض تفاصيل المؤسسة"
                  >
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal isOpen={showAddModal} onClose={() => setShowAddModal(false)}>
      <h2 className="text-xl font-bold mb-4">إضافة مؤسسة جديدة</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">اسم المؤسسة</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            required
            aria-label="اسم المؤسسة"
            title="اسم المؤسسة"
            placeholder="ادخل اسم المؤسسة"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">رقم الهاتف</label>
          <input
            type="tel"
            className="w-full p-2 border border-gray-300 rounded"
            required
            aria-label="رقم الهاتف"
            title="رقم الهاتف"
            placeholder="ادخل رقم الهاتف"
          />
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="px-4 py-2 text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            إلغاء
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2 cursor-pointer"
          >
            {loading && <Loader2 className="animate-spin" size={18} />}
            حفظ
          </button>
        </div>
      </form>
    </Modal>
      {selectedInstitution && (
        <Modal isOpen={showEditModal} onClose={() => setShowEditModal(false)}
        >
          <h2 className="text-xl font-bold mb-4">تعديل المؤسسة</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">اسم المؤسسة</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              required
              title="اسم المؤسسة"
              placeholder="ادخل اسم المؤسسة"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">رقم الهاتف</label>
            <input
              type="tel"
              className="w-full p-2 border rounded"
              required
              title="رقم الهاتف"
              placeholder="ادخل رقم الهاتف"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={() => setShowEditModal(false)} className="px-4 py-2 text-gray-600 hover:text-gray-800">
              إلغاء
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              حفظ التعديلات
            </button>
          </div>
        </form>
        </Modal>
      )}
      {selectedInstitution && (
        <Modal isOpen={showDetailsModal} onClose={() => setShowDetailsModal(false)} >
          <h2 className="text-xl font-bold mb-4">تفاصيل المؤسسة</h2>
        <p><span>اسم المؤسسة:</span> iii</p>
        <p><span>رقم الهاتف:</span> jj</p>
        <p><span>الحالة:</span> غير مفعلة ❌</p>
        <div className="flex justify-end mt-4">
          <button onClick={() => setShowDetailsModal(false)} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700">
            إغلاق
          </button>
        </div>
        </Modal>
      )}
      {selectedInstitution && (
        <Modal isOpen={showActivateModal} onClose={() => setShowActivateModal(false)}>
      <h2 className="text-xl font-bold mb-4">
        تفعيل مؤسسة: sasasas
      </h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">تاريخ التفعيل</label>
          <input
            type="date"
            name="activationDate"
            className="w-full p-2 border border-gray-300 rounded"
            required
            aria-label="تاريخ التفعيل"
            title="تاريخ التفعيل"
            placeholder="اختر تاريخ التفعيل"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">اسم المسؤول</label>
          <input
            type="text"
            name="adminName"
            className="w-full p-2 border border-gray-300 rounded"
            required
            aria-label="اسم المسؤول"
            title="اسم المسؤول"
            placeholder="أدخل اسم المسؤول"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">هاتف المسؤول</label>
          <input
            type="tel"
            name="adminPhone"
            className="w-full p-2 border border-gray-300 rounded"
            required
            aria-label="هاتف المسؤول"
            title="هاتف المسؤول"
            placeholder="أدخل رقم هاتف المسؤول"
          />
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="px-4 py-2 text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            إلغاء
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center gap-2 cursor-pointer"
          >
            {loading && <Loader2 className="animate-spin" size={18} />}
            تأكيد التفعيل
          </button>
        </div>
      </form>
        </Modal>
      )}
    </div>
  );
};

export default InstitutionsTable;
