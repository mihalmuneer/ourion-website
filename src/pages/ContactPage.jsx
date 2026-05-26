import { useState } from "react";
import { CheckCircle2, MessageCircle, Mail } from "lucide-react";
import Button from "../components/ui/Button";
import PageHero from "../components/ui/PageHero";
import {
  CONTACT_EMAIL,
  WHATSAPP_LINK,
  WHATSAPP_LINK_PROPS,
  WEB3FORMS_ACCESS_KEY,
  WEB3FORMS_SUBMIT_URL,
  WEB3FORMS_SUBJECT,
} from "../data/content";

const emptyForm = {
  name: "",
  company: "",
  contact: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(WEB3FORMS_SUBMIT_URL, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setForm(emptyForm);
        e.currentTarget.reset();
        setStatus("success");
        return;
      }

      setStatus("error");
      setErrorMessage(
        data.message || "We could not send your enquiry. Please try again."
      );
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong. Please email us or use WhatsApp instead."
      );
    }
  };

  const inputClass =
    "w-full rounded-lg border border-ourion-light-border bg-white px-4 py-3 text-base text-ourion-ink placeholder:text-ourion-ink-soft focus:border-ourion-blue focus:outline-none focus:ring-2 focus:ring-ourion-blue/20 disabled:opacity-60";

  return (
    <>
      <PageHero
        label="Contact"
        title="Have a business process that feels messy?"
        description="Tell us what you currently manage through WhatsApp, Excel, calls, or manual follow-ups. We'll help you turn it into a clear system."
        primaryCta="Request a Workflow Review"
        primaryHref={WHATSAPP_LINK}
        secondaryCta="WhatsApp Ourion"
        secondaryHref={WHATSAPP_LINK}
      />

      <section className="border-t border-ourion-border bg-ourion-light py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-ourion-ink sm:text-2xl">
                Get in touch
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ourion-ink-muted sm:text-base">
                Send an enquiry below, email us directly, or message on WhatsApp.
                We typically respond within one to two business days.
              </p>

              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex min-h-[44px] items-center gap-3 text-ourion-ink transition-colors hover:text-ourion-blue"
                  >
                    <Mail size={20} className="shrink-0 text-ourion-blue" />
                    <span className="text-sm font-medium sm:text-base">
                      {CONTACT_EMAIL}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    {...WHATSAPP_LINK_PROPS}
                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-3 rounded-lg border border-emerald-600/30 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800 transition-colors hover:bg-emerald-100 sm:w-auto sm:justify-start sm:text-base"
                  >
                    <MessageCircle size={20} />
                    WhatsApp Ourion
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              {status === "success" ? (
                <div
                  className="rounded-2xl border border-ourion-blue/25 bg-white p-8 text-center shadow-sm sm:p-12"
                  role="status"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ourion-blue/10 text-ourion-blue">
                    <CheckCircle2 size={32} strokeWidth={1.75} aria-hidden />
                  </div>
                  <p className="mt-6 text-lg font-semibold leading-relaxed text-ourion-ink sm:text-xl">
                    Thank you. Ourion has received your enquiry and will get back
                    to you soon.
                  </p>
                  <Button
                    type="button"
                    variant="secondary"
                    className="mt-8 w-full sm:w-auto"
                    onClick={() => setStatus("idle")}
                  >
                    Send another enquiry
                  </Button>
                </div>
              ) : (
                <form
                  method="POST"
                  action={WEB3FORMS_SUBMIT_URL}
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-ourion-light-border bg-ourion-light-card p-6 shadow-sm sm:p-8"
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value={WEB3FORMS_ACCESS_KEY}
                  />
                  <input
                    type="hidden"
                    name="subject"
                    value={WEB3FORMS_SUBJECT}
                  />

                  <h2 className="text-lg font-bold text-ourion-ink">
                    Enquiry form
                  </h2>

                  {status === "error" && errorMessage && (
                    <p
                      className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                      role="alert"
                    >
                      {errorMessage}
                    </p>
                  )}

                  <div className="mt-6 space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-semibold text-ourion-ink"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        disabled={status === "submitting"}
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="mb-1.5 block text-sm font-semibold text-ourion-ink"
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        disabled={status === "submitting"}
                        value={form.company}
                        onChange={handleChange}
                        className={inputClass}
                        autoComplete="organization"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact"
                        className="mb-1.5 block text-sm font-semibold text-ourion-ink"
                      >
                        Email / WhatsApp
                      </label>
                      <input
                        id="contact"
                        name="contact"
                        type="text"
                        required
                        disabled={status === "submitting"}
                        value={form.contact}
                        onChange={handleChange}
                        className={inputClass}
                        autoComplete="email"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-sm font-semibold text-ourion-ink"
                      >
                        What do you want to improve?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        disabled={status === "submitting"}
                        value={form.message}
                        onChange={handleChange}
                        className={`${inputClass} min-h-[120px] resize-y`}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="mt-8 w-full sm:w-auto"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Sending…" : "Submit enquiry"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
