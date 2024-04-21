import React from "react";

export default function Header() {
    return (
        <div style={{ display: "flex", justifyContent: "space-around", backgroundColor: "bisque", width: "70%", padding: "0 20px" }}>
            <ul style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
                <li><a href="./contact-form.html">資料請求</a></li>
                <li><a href="#faq">よくあるご質問</a></li>
                <li><a href="#service">サービス紹介</a></li>
                <li><a href="./contact-form.html">お問合せフォーム</a></li>
            </ul>
        </div>
    );
}