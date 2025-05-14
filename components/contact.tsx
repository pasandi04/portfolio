"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Facebook, Linkedin, Mail, Github, SendIcon, MapPin, Phone } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({
    type: null,
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    // Replace this URL with your actual form submission endpoint
    const formSubmissionUrl = "https://formspree.io/f/xovqowoy"

    try {
      // Create form data for submission
      const formDataToSubmit = new FormData()
      formDataToSubmit.append("name", formData.name)
      formDataToSubmit.append("email", formData.email)
      formDataToSubmit.append("message", formData.message)

      // Submit the form data to the external URL
      const response = await fetch(formSubmissionUrl, {
        method: "POST",
        body: formDataToSubmit,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        // Form submitted successfully
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        // Form submission failed
        setSubmitStatus({
          type: "error",
          message: "Failed to send message. Please try again.",
        })
      }
    } catch (error) {
      // Network or other error
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      })
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Social media links with their respective icons
  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      url: "https://instagram.com/username",
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      url: "https://facebook.com/username",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://linkedin.com/in/username",
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/username",
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:pasandi.ayodya@example.com",
    },
  ]

  // Contact info cards data
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "pasandi.ayodya@example.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+1 (234) 567-8901",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "San Francisco, CA",
    },
  ]

  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>
        <p className="text-muted-foreground text-center max-w-md mx-auto mb-12">
          Feel free to reach out if you have any questions or want to work together!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 rounded-lg border bg-card/50 hover:bg-card transition-colors duration-300"
                >
                  <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">{item.icon}</div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-medium mb-4">Connect With Me</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="p-3 rounded-full bg-card/50 border hover:bg-primary hover:text-primary-foreground hover:border-primary 
                            transition-all duration-300 transform hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Content */}
            <div className="rounded-lg border bg-card/50 p-5">
              <h3 className="text-lg font-medium mb-2">Office Hours</h3>
              <p className="text-muted-foreground">
                Monday - Friday: 9AM - 5PM
                <br />
                Saturday: 10AM - 2PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-lg border p-6 shadow-sm">
            <h3 className="text-lg font-medium mb-4">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="rounded-md"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="rounded-md"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  className="rounded-md min-h-[120px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full gap-2 mt-2" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <SendIcon className="h-4 w-4" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <p
                  className={`text-sm mt-2 ${
                    submitStatus.type === "success"
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {submitStatus.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
