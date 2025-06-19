import { useState } from 'react';
import styles from './About.module.css';

const About = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I place an order?",
      answer: "Simply browse our products, add items to your cart, and proceed to checkout."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unused items with original packaging."
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping typically takes 3-5 business days within the country."
    }
  ];

  return (
    <div className={styles.about}>
      <section className={styles.aboutUs}>
        <h1>About ShopEase</h1>
        <p>
          ShopEase was founded in 2024 with the mission to provide high-quality products 
          at affordable prices with exceptional customer service.
        </p>
        <p>
          Our team is dedicated to curating the best selection of products and ensuring 
          a seamless shopping experience for our customers.
        </p>
      </section>
      
      <section className={styles.faq}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button 
                className={styles.faqQuestion}
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <span>{activeFaq === index ? '−' : '+'}</span>
              </button>
              {activeFaq === index && (
                <div className={styles.faqAnswer}>{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;