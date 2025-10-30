import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const faqs = [
  {
    question: "How much does coaching cost?",
    answer: "Coaching programs range from €150-500 per month depending on the level of support. Custom training plans start at €150/month, nutrition coaching at €200/month, and comprehensive 1:1 coaching at €350-500/month. All programs include direct support and regular check-ins."
  },
  {
    question: "How long until I see results?",
    answer: "Most clients see noticeable changes in 4-6 weeks, with significant transformations occurring at the 12-week mark. However, sustainable results require commitment–I recommend a minimum 3-month commitment to see the full benefits of the program and build lasting habits."
  },
  {
    question: "What if I can't commit to the full program?",
    answer: "While I recommend a minimum 3-month commitment for best results, I understand life happens. We work on a monthly basis with no long-term contracts. However, real transformation requires consistency, so I encourage you to commit fully when you're ready."
  },
  {
    question: "Do I need gym access?",
    answer: "While a gym provides the most equipment options, I can design programs for home training with minimal equipment. Just let me know your setup during the application process, and I'll tailor the program to what you have available."
  },
  {
    question: "How does online coaching work?",
    answer: "You'll receive a personalized training program through a coaching app, along with nutrition guidance and habit coaching. We have weekly check-ins via video or messaging, and you have direct WhatsApp access to me for questions and form checks throughout the week."
  },
  {
    question: "What makes your coaching different?",
    answer: "I don't use cookie-cutter programs. Every plan is customized to your body, goals, schedule, and lifestyle. I focus on sustainable habits, not quick fixes. Plus, you get direct access to me–not a team of assistants. I personally work with every client."
  },
  {
    question: "Can you help with nutrition if I have dietary restrictions?",
    answer: "Absolutely. I work with various dietary preferences and restrictions–vegan, vegetarian, gluten-free, etc. My nutrition approach is flexible and focused on principles, not rigid meal plans. We'll find an approach that works for your lifestyle and preferences."
  },
  {
    question: "What if I'm a complete beginner?",
    answer: "Perfect! I work with all experience levels. If you're new to training, we'll start with proper form, fundamental movements, and building a solid foundation. Many of my most successful transformations have been with people who started from zero."
  },
  {
    question: "How often will we communicate?",
    answer: "You have direct WhatsApp access to me throughout the week for quick questions and form checks. We have structured weekly check-ins where we review your progress, adjust your program, and troubleshoot any challenges. You're never left wondering what to do next."
  },
  {
    question: "What's the application process?",
    answer: "Fill out the application form on this page. I'll review it personally and reach out within 24 hours to schedule a free consultation call. On the call, we'll discuss your goals, assess if we're a good fit, and determine the best program for you. No pressure, no obligation."
  }
];

const FAQSection = () => {
  const [ref, isInView] = useIntersectionObserver({ threshold: 0.1, freezeOnceVisible: true });

  return (
    <section id="faq" className="w-full py-24 px-6 cv-auto" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div 
          className={`text-center mb-16 transition-all duration-1200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="mb-4 mt-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            What to expect from faith-driven, discipline-first coaching
          </p>
        </div>

        <div 
          className={`transition-all duration-1200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-accent font-semibold text-lg py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 leading-relaxed pb-5 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions CTA */}
        <div 
          className={`mt-12 text-center transition-all duration-1200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <p className="text-foreground/70 mb-4">Still have questions?</p>
          <a
            href="#apply"
            onClick={(e) => { e.preventDefault(); document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-block text-accent hover:text-accent/80 font-semibold underline underline-offset-4"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

