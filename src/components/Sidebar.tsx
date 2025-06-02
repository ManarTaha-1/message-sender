import { useState, useEffect, useMemo } from "react";
import { Building2, Image, MessageSquare, LogOut, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const menuItems = useMemo(() => [
    { id: "institutions", title: "المؤسسات", icon: Building2, path: "/institutions" },
    { id: "images", title: "الصور", icon: Image, path: "/images" },
    { id: "messages", title: "تجهيز الرسائل", icon: MessageSquare, path: "/messages" }
  ], []);


  useEffect(() => {
    const currentItem = menuItems.find((item) => item.path === window.location.pathname);
    if (currentItem) {
      setActiveItem(currentItem.id);
    }
  }, [menuItems]);
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={() => setIsOpen(false)} />}

      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-64 rounded-l-lg`}
        dir="rtl"
      >
        <div className="p-6 border-b mt-15 border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 text-center ">نظام إدارة المؤسسات</h2>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeItem === item.id;

              return (
                <li key={item.id}>
                  <Link
                    onClick={()=>setIsOpen(false)}
                    to={item.path}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg text-right transition-all duration-200 ${
                      isActive ? "bg-blue-100 text-blue-700 border-r-4 border-blue-600" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                    }`}
                  >
                    <IconComponent size={20} className={isActive ? "text-blue-600" : "text-gray-500"} />
                    <span className="font-medium">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
          >
            <LogOut size={20} />
            <span className="font-medium cursor-pointer">تسجيل الخروج</span>
          </button>
        </div>

        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            الصفحة النشطة: <span className="font-bold text-blue-600">{menuItems.find((item) => item.id === activeItem)?.title}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SideBar;
