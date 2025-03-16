// SideBar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FaCompass,
    FaSquareVirus,
    FaSeedling,
    FaChartColumn,
    FaAnglesLeft,
} from "react-icons/fa6";

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();

    const menuItems = [
        {
            path: "/dashboard",
            name: "Dashboard",
            icon: <FaCompass size={collapsed ? 22 : 20} />,
        },
        {
            path: "/disease-identifier",
            name: "Disease Identifier",
            icon: <FaSquareVirus size={collapsed ? 22 : 20} />,
        },
        {
            path: "/age-identifier",
            name: "Age Identifier",
            icon: <FaSeedling size={collapsed ? 22 : 20} />,
        },
        {
            path: "/market-trends",
            name: "Market Trends",
            icon: <FaChartColumn size={collapsed ? 22 : 20} />,
        },
    ];

    return (
        <motion.div
            className="h-screen bg-green-600 text-white py-4 flex flex-col"
            animate={{ width: collapsed ? "85px" : "240px" }}
            transition={{ duration: 0.3 }}
        >
            <div
                className={`px-4 ${collapsed ? "flex justify-center" : "mb-6"}`}
            >
                {collapsed ? (
                    <div className="w-8 h-8">
                        <motion.div
                            whileHover={{ rotate: 20 }}
                            className="w-full"
                        >
                            <FaSeedling className="w-full h-full" />
                        </motion.div>
                    </div>
                ) : (
                    <div className="flex items-center w-48">
                        <img src="./tea-logo.png" alt="" />
                    </div>
                )}
            </div>

            <div className="flex-grow overflow-hidden mt-6">
                {menuItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            to={item.path}
                            key={item.name}
                            className={`flex items-center px-4 py-3 my-2 mx-2 rounded-lg transition-colors duration-200 
              ${
                  isActive
                      ? "bg-white text-green-600"
                      : "hover:bg-green-700 hover:text-white"
              }`}
                        >
                            <div
                                className={`${collapsed ? "mx-auto" : "mr-3"}`}
                            >
                                {item.icon}
                            </div>
                            {!collapsed && (
                                <span className="text-lg">{item.name}</span>
                            )}
                        </Link>
                    );
                })}
            </div>

            <div className="px-2 mt-auto">
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="w-full flex items-center justify-center bg-green-700 hover:bg-green-800 p-3 rounded-lg transition-colors"
                >
                    <motion.div
                        animate={{ rotate: collapsed ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FaAnglesLeft size={collapsed ? 25 : 20} />
                    </motion.div>
                    {!collapsed && <span className="ml-2">Collapse</span>}
                </button>
            </div>
        </motion.div>
    );
};

export default SideBar;
