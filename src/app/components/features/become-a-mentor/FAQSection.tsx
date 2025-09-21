export default function FAQSection() {
  const faqs = [
    {
      question: "What qualifications do I need to become a mentor?",
      answer:
        "You need to be a current student or recent graduate from a top university with a strong academic record.",
    },
    {
      question: "How much can I earn as a mentor?",
      answer:
        "Earnings vary based on your experience and the number of sessions you conduct. Top mentors can earn significantly by helping multiple students.",
    },
    {
      question: "How do I get paid?",
      answer:
        "We offer secure payment processing with regular payouts to your preferred payment method.",
    },
    {
      question: "Can I work part-time as a mentor?",
      answer:
        "Absolutely! You can set your own schedule and work as many or as few hours as you prefer. Many mentors work part-time while studying.",
    },
    {
      question: "How do students find me?",
      answer:
        "Students can search for mentors based on university, field of study, and expertise. Your profile will be visible to students looking for mentorship in your areas.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about becoming a mentor
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-black mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
