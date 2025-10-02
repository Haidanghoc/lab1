import React, { useState, useEffect } from "react";

interface ButtonProps {
    label: string;
    color?: string; // Có thể có hoặc không
    onClick?: () => void;
}

// Hàm random màu
const getRandomColor = () => {
    const colors = ["#e63946", "#2a9d8f", "#f4a261", "#457b9d", "#ffb703", "#8d99ae"];
    return colors[Math.floor(Math.random() * colors.length)];
};

const Button: React.FC<ButtonProps> = ({ label, color, onClick }) => {
    // useState: quản lý màu nút
    const [btnColor, setBtnColor] = useState<string>("");

    // useEffect: chạy khi component render lần đầu hoặc khi prop color thay đổi
    useEffect(() => {
        if (color) {
            setBtnColor(color); // nếu có prop color → dùng màu đó
        } else {
            setBtnColor(getRandomColor()); // nếu không → random
        }
    }, [color]);

    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: btnColor,
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
            }}
        >
            {label}
        </button>
    );
};

export default Button;
