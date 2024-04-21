import React from "react";


export default function Header() {
    return(
        
            
        <div className="display: flex; justify-content: space-around; background-color: bisque; width:70%;  justify-content: flex-end; padding-right:20px;">
            <ul className="display: flex; flex-direction:row; gap:30px;">
                <li><a href="./contact-form.html">資料請求</a></li>
                <li><a href="./index.html#faq">よくあるご質問</a></li>
                <li><a href="./index.html#service">サービス紹介</a></li>
                <li><a href="./contact-form.html">お問合せフォーム</a></li>
            </ul>

        </div>      
        
    );
}