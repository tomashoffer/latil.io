"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import Modal from "@/components/ui/Modal";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { Mail, Linkedin, Send, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactCTA = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
        // El modal se cierra manualmente o después de 5 segundos
      } else {
        throw new Error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error:", error);
      // Error manejado silenciosamente - el usuario puede intentar nuevamente
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {t.contact.title}
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <FadeIn direction="right">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <Input
                    label={t.contact.form.name}
                    {...register("name")}
                    error={errors.name?.message}
                    placeholder={t.contact.form.name}
                  />

                  <Input
                    label={t.contact.form.email}
                    type="email"
                    {...register("email")}
                    error={errors.email?.message}
                    placeholder={t.contact.form.email}
                  />

                  <Input
                    label={t.contact.form.company}
                    {...register("company")}
                    error={errors.company?.message}
                    placeholder={t.contact.form.company}
                  />

                  <Input
                    label={t.contact.form.role}
                    {...register("role")}
                    error={errors.role?.message}
                    placeholder={t.contact.form.role}
                  />

                  <Select
                    label={t.contact.form.challenge}
                    {...register("challenge")}
                    error={errors.challenge?.message}
                  >
                    <option value="">{t.contact.form.challengeOptions.placeholder}</option>
                    <option value="cloud">{t.contact.form.challengeOptions.cloud}</option>
                    <option value="finance">{t.contact.form.challengeOptions.finance}</option>
                    <option value="both">{t.contact.form.challengeOptions.both}</option>
                  </Select>

                  <Textarea
                    label={t.contact.form.message}
                    rows={4}
                    {...register("message")}
                    error={errors.message?.message}
                    placeholder={t.contact.form.messagePlaceholder}
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      t.contact.form.submitting
                    ) : (
                      <>
                        {t.contact.form.submit}
                        <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
            </div>
          </FadeIn>

          {/* Success Modal */}
          <Modal isOpen={isSuccess} onClose={() => setIsSuccess(false)}>
            <div className="p-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2, bounce: 0.5 }}
                className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
              >
                <CheckCircle className="text-white" size={48} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {t.contact.form.success}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t.contact.form.successDesc}
                </p>

                <Button
                  onClick={() => setIsSuccess(false)}
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  {t.contact.form.close}
                </Button>
              </motion.div>
            </div>
          </Modal>

          {/* Contact Info */}
          <FadeIn direction="left" delay={0.2}>
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-6">{t.contact.direct}</h3>
              <div className="space-y-6">
                <a
                  href="mailto:contacto@latil.io"
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">{t.contact.email}</div>
                    <div className="text-primary-100">contacto@latil.io</div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/company/latil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">{t.contact.linkedin}</div>
                    <div className="text-primary-100">{t.contact.linkedinDesc}</div>
                  </div>
                </a>
              </div>

              <div className="mt-8 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                <h4 className="font-semibold mb-3">{t.contact.commitment}:</h4>
                <ul className="space-y-2 text-primary-100 text-sm">
                  <li>{t.contact.c1}</li>
                  <li>{t.contact.c2}</li>
                  <li>{t.contact.c3}</li>
                  <li>{t.contact.c4}</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

