
import { useState } from 'react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqItems = [
    {
      question: "Is my medical data secure with RxPod?",
      answer: "Absolutely. RxPod uses end-to-end encryption, meaning your data is only accessible to you. Even our development team cannot access your personal health information. Your data is stored locally on your device and can be backed up to your personal cloud storage if you choose."
    },
    {
      question: "Do I need a subscription to use RxPod?",
      answer: "No! RxPod is free to use for storing and accessing your health data. You only pay for premium features like AI reports and advanced sharing capabilities through our Care Credits system, which is a pay-as-you-go model with no recurring fees."
    },
    {
      question: "Can I share my health data with my doctor?",
      answer: "Yes, RxPod allows you to generate secure, temporary access links to share specific parts of your health data with healthcare providers. You control exactly what information is shared and for how long the access remains valid."
    },
    {
      question: "Does RxPod work offline?",
      answer: "Yes! Once your data is synced to your device, you can access all your medical information without an internet connection. This makes it perfect for emergency situations or when traveling to areas with limited connectivity."
    },
    {
      question: "How do I purchase Care Credits?",
      answer: "Care Credits can be purchased directly within the app using standard payment methods including credit card, PayPal, and Apple/Google Pay. Credits never expire and can be used whenever you need them."
    }
  ];
  
  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section className="w-full bg-[rgba(249,249,249,1)] py-20 px-8 mt-20 max-md:px-5 max-md:mt-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-black">Frequently Asked </span>
          <span className="text-[#F38759]">Questions</span>
        </h2>
        
        <div className="flex flex-col gap-4">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left font-semibold text-lg focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                {item.question}
                <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
