import { FC, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
    Facebook,
    Github,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    MessageCirclePlus,
    Phone,
    Twitter,
} from "lucide-react";
import { HackerRankIcon } from "@/components/HackerRankIcon.tsx";
import { SectionTitle } from "@/components/SectionTitle.tsx";
import { useApp } from "@/pages/utils/AppContext.tsx";

export const Contact: FC = () => {
    const {
        profile: { phone, email, location, social },
    } = useApp();

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [error, setError] = useState<string | null>(null);
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        setError(null);
        setSent(false);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const name = form.name.trim();
        const senderEmail = form.email.trim();
        const subject = form.subject.trim();
        const message = form.message.trim();

        if (!name || !senderEmail || !message) {
            setError("Please fill in your name, email, and message.");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail)) {
            setError("Please enter a valid email address.");
            return;
        }

        setSending(true);
        setError(null);
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: name,
                    from_email: senderEmail,
                    subject: subject || `Portfolio contact from ${name}`,
                    message,
                    time: new Date().toLocaleString(),
                },
                { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
            );
            setSent(true);
            setForm({ name: "", email: "", subject: "", message: "" });
        } catch {
            setError(
                "Something went wrong sending your message. Please try again or email me directly.",
            );
        } finally {
            setSending(false);
        }
    };

    const icons: Record<string, React.ElementType> = {
        github: Github,
        linkedin: Linkedin,
        mail: Mail,
        twitter: Twitter,
        instagram: Instagram,
        facebook: Facebook,
        whatsapp: MessageCirclePlus,
        hackerrank: HackerRankIcon,
    };

    return (
        <section id="contact" className="">
            <SectionTitle title="Contact Me" />

            <CardHeader className="px-0">
                <CardTitle className="group-hover:text-primary transition-colors">
                    Get in Touch
                </CardTitle>
                <CardDescription>
                    Have a project in mind? Let's collaborate!
                </CardDescription>
            </CardHeader>

            <div className="grid lg:grid-cols-2 gap-8">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-secondary/20">
                    <CardHeader className="hover:text-primary transition-colors">
                        <CardTitle>{"Let's Connect"}</CardTitle>
                        <CardDescription>
                            {
                                "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!"
                            }
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-2">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 group cursor-pointer">
                                <div className="h-10 w-10 rounded-lg glass-strong flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:shadow-md group-hover:shadow-primary/30 border border-secondary/20 bg-secondary/5">
                                    <Mail className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold">
                                        Email
                                    </p>
                                    <a
                                        href={`mailto:${email}`}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 group cursor-pointer">
                                <div className="h-10 w-10 rounded-lg glass-strong flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:shadow-md group-hover:shadow-primary/30 border border-secondary/20 bg-secondary/5">
                                    <Phone className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold">
                                        Phone / WhatsApp
                                    </p>
                                    <a
                                        href={`https://wa.me/923027993900`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 group cursor-pointer">
                                <div className="h-10 w-10 rounded-lg glass-strong flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:shadow-md group-hover:shadow-primary/30 border border-secondary/20 bg-secondary/5">
                                    <MapPin className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold">
                                        Location
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-secondary/20">
                    <CardContent>
                        <form className="space-y-4 pt-3" onSubmit={handleSubmit} noValidate>
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    placeholder="Your Name"
                                    className="focus:ring-primary"
                                    value={form.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="your.email@example.com"
                                    className="focus:ring-primary"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="subject">Subject</Label>
                                <Input
                                    id="subject"
                                    type="text"
                                    placeholder="What's this about?"
                                    className="focus:ring-primary"
                                    value={form.subject}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Your message here..."
                                    className="focus:ring-primary"
                                    value={form.message}
                                    onChange={handleChange}
                                />
                            </div>
                            {error && (
                                <p className="text-sm text-destructive">{error}</p>
                            )}
                            {sent && (
                                <p className="text-sm text-primary">
                                    Thanks! Your message has been sent — I'll get
                                    back to you soon.
                                </p>
                            )}
                            <Button
                                type="submit"
                                className="w-full"
                                disabled={sending}
                            >
                                {sending ? "Sending…" : "Send Message"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>

            <CardFooter className="flex justify-center gap-4 mt-5 px-0">
                {social.map(({ icon, url }, index) => {
                    const Icon = icons[icon];
                    if (!Icon) return null;
                    return (
                        <Button
                            key={index}
                            variant="outline"
                            size="icon"
                            className="hover:bg-primary/20 transition-colors"
                            asChild
                        >
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={icon}
                            >
                                <Icon className="text-primary" />
                            </a>
                        </Button>
                    );
                })}
            </CardFooter>
        </section>
    );
};

export default Contact;
