import {Mail, Phone, MapPin, Linkedin, Github, Send} from "lucide-react";
import {cn} from "@/lib/utils";
import {useToast} from "@/hooks/use-toast";
import { useState } from "react";



export const ContactSection = () => {

    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() =>{
            toast({
                title:"Message sent !",
                description:"Thank you for your message, I will get back to you as soon as possible.",
            })
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 p-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In 
                    <span className="text-primary"> Touch </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    If you have a question or anything else, feel free to contact me.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
                    <div className="space-y-8 ">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>
                        <div className="space-y-6 items-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">
                                        Email
                                    </h4>
                                    <a href="mailto:simon.boisneault@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        simon.boisneault@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">
                                        Phone number
                                    </h4>
                                    <a href="tel:+33769345453" className="text-muted-foreground hover:text-primary transition-colors">
                                        +33 7 69 34 54 53
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">
                                        Location
                                    </h4>
                                    <p className="text-muted-foreground hover:text-primary transition-colors">
                                        75000, Paris France
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 classNAme="font-medium mb-4">
                                Connect with <span className="text-primary">
                                    me
                                </span>
                            </h4>
                            <div className="flex space-x-4 justify-center p-4">
                                <a href="https://www.linkedin.com/in/simon-boisneault-4a1620278/" target="_blank">
                                <Linkedin />
                                </a>
                                <a href="https://github.com/stea-tt" target="_blank">
                                <Github />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                        <h3 className="tet-2xl font-semibold mb-6">
                            Send a message
                        </h3>

                        <form className="space-y-6">
                            <div>
                                <label htmlfor="name" className="block text-sm font-medium mb-2">Your name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                                    placeholder="Simon Boisneault..."
                                />
                            </div>

                            <div>
                                <label htmlfor="email" className="block text-sm font-medium mb-2">Your email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                                    placeholder="exemple@gmail.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>

                            <button 
                            type="submit"
                            disabled={isSubmitting}
                            className={cn("hacker-button w-full flex items-center justify-center gap-2")}>
                                {isSubmitting ? "Sending..." : "Send message"}
                                <Send size={16}/>
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};



