"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLeadModal } from "@/components/ui/lead-modal-context";
import emailjs from "@emailjs/browser";

export function LeadModal() {
  const { isOpen, closeModal } = useLeadModal();
  const [step, setStep] = useState<"form" | "success">("form");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Luxury Villa Renovation",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EMAILJS CONFIGURATION INSTRUCTIONS
    // 1. Go to https://www.emailjs.com/ and create an account.
    // 2. Add a new Email Service (e.g., Gmail).
    // 3. Create an Email Template.
    //    - Use {{name}}, {{phone}}, {{email}}, {{service}}, {{message}} as variables.
    // 4. Replace the placeholders below with your actual IDs.
    
    // EmailJS Configuration
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;

    try {
      if (SERVICE_ID && PUBLIC_KEY && TEMPLATE_ID) {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            // These keys must match the variables in your EmailJS Template (e.g., {{name}}, {{phone}})
            from_name: formData.name,
            reply_to: formData.email,
            phone: formData.phone,
            service_type: formData.service,
            message: formData.message,
          },
          PUBLIC_KEY
        );
      } else {
        // Fallback simulation if not configured yet
        console.log("EmailJS not configured yet. Simulating success.");
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      setStep("success");
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    closeModal();
    // Reset form after delay to allow animation out
    setTimeout(() => {
      setStep("form");
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "Luxury Villa Renovation",
        message: "",
      });
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-luxury-black/90 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-luxury-charcoal border border-luxury-gold/20 shadow-2xl z-[101] p-8 md:p-12 overflow-hidden"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-luxury-white/40 hover:text-luxury-gold transition-colors"
            >
              <X size={24} />
            </button>

            {step === "form" ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-3xl text-luxury-white mb-2">Private Consultation</h3>
                  <p className="text-luxury-white/60 text-sm">Enter your details. Our architectural team will reach out shortly.</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-luxury-gold mb-2">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-luxury-black/50 border border-white/10 px-4 py-3 text-luxury-white focus:border-luxury-gold focus:outline-none transition-colors"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-luxury-gold mb-2">Phone</label>
                      <input
                        required
                        type="tel"
                        className="w-full bg-luxury-black/50 border border-white/10 px-4 py-3 text-luxury-white focus:border-luxury-gold focus:outline-none transition-colors"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-luxury-gold mb-2">Service</label>
                      <select
                        className="w-full bg-luxury-black/50 border border-white/10 px-4 py-3 text-luxury-white focus:border-luxury-gold focus:outline-none transition-colors"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option>Luxury Villa Renovation</option>
                        <option>Penthouse Remodeling</option>
                        <option>Turnkey Design Build</option>
                        <option>Interior Fit-Out</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-luxury-gold mb-2">Email</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-luxury-black/50 border border-white/10 px-4 py-3 text-luxury-white focus:border-luxury-gold focus:outline-none transition-colors"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-luxury-gold mb-2">Message (Optional)</label>
                    <textarea
                      rows={3}
                      className="w-full bg-luxury-black/50 border border-white/10 px-4 py-3 text-luxury-white focus:border-luxury-gold focus:outline-none transition-colors resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      Submit Request <Send size={16} />
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <div className="flex flex-col items-center text-center py-12 space-y-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="text-luxury-gold"
                >
                  <CheckCircle size={64} />
                </motion.div>
                <div>
                  <h3 className="font-serif text-3xl text-luxury-white mb-4">Request Received</h3>
                  <p className="text-luxury-white/60 max-w-xs mx-auto">
                    Thank you, {formData.name}. Your inquiry has been sent to our team. We will review your project details and contact you shortly.
                  </p>
                </div>
                <Button variant="outline" onClick={handleClose}>Close</Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
