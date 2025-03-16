// Header.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { MdArrowDropDown } from "react-icons/md";

const Header = ({ title }) => {
    return (
        <div className="flex justify-between items-center mb-6">
            <div>
                <div className="flex items-center w-70">
                    <img src="./tea-logo.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;
