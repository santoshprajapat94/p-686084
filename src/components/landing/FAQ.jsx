
import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left font-medium text-xl text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <svg 
          className={`w-6 h-6 transition-transform ${isOpen ? "transform rotate-180" : ""}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-700">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export const FAQ = () => {
  const faqItems = [
    {
      question: "Is my health data secure?",
      answer: "Yes, RxPod uses end-to-end encryption to ensure your health data is completely secure. Even our team cannot access your personal information."
    },
    {
      question: "Do I need an internet connection to access my records?",
      answer: "No, once your data is synced to your device, you can access it offline anytime. This ensures you always have critical health information when needed."
    },
    {
      question: "How do Care Credits work?",
      answer: "Care Credits are our flexible payment system. The basic app is free to use, but premium features like AI reports or sharing capabilities require credits that you can purchase on-demand."
    },
    {
      question: "Can I share my health data with my doctor?",
      answer: "Yes, RxPod allows you to securely share specific health records with healthcare providers for limited periods. You control exactly what information is shared and for how long."
    },
    {
      question: "Is there a subscription fee?",
      answer: "No, RxPod has no subscription fees. The basic app is free forever, and you only pay for premium features when you need them through our Care Credits system."
    }
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="text-black">Frequently </span>
        <span className="text-[#F38759]">Asked </span>
        <span className="text-[#34B6B3]">Questions</span>
      </h2>
      
      <div className="space-y-2">
        {faqItems.map((item, index) => (
          <FAQItem 
            key={index} 
            question={item.question} 
            answer={item.answer}
          />
        ))}
      </div>
    </section>
  );
};
