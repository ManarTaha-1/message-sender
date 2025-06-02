
import InstitutionsTable from '../components/InstitutionsTable'

const InstitutionsPage = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 p-6 overflow-auto">
        <h1 className="text-2xl font-bold mb-6 mt-20">المؤسسات</h1>
        <InstitutionsTable />
      </div>
    </div>
  );
};

export default InstitutionsPage;