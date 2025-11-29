import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface DownloadBrochureModalProps {
    children: React.ReactNode;
    title?: string;
}

const DownloadBrochureModal = ({ children, title = "Download Brochure" }: DownloadBrochureModalProps) => {
    const { toast } = useToast();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        countryCode: "+91",
        phone: "",
        email: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.phone) {
            toast({
                title: "Required fields missing",
                description: "Please fill in your name and phone number",
                variant: "destructive",
            });
            return;
        }

        // Phone validation
        if (!/^\d{10}$/.test(formData.phone)) {
            toast({
                title: "Invalid Phone Number",
                description: "Please enter a valid 10-digit phone number",
                variant: "destructive",
            });
            return;
        }

        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            toast({
                title: "Request Submitted Successfully!",
                description: "Our team will contact you shortly.",
            });
            setFormData({ name: "", countryCode: "+91", phone: "", email: "" });
            setIsSubmitting(false);
            setOpen(false);
            navigate("/thank-you.html");
        }, 1000);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        Please fill in your details to download the brochure.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div>
                        <Input
                            type="text"
                            placeholder="Name *"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="h-12 border-border/50 text-base"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                        <Select
                            value={formData.countryCode}
                            onValueChange={(value) => setFormData({ ...formData, countryCode: value })}
                        >
                            <SelectTrigger className="h-12 border-border/50">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="+91">🇮🇳 +91</SelectItem>
                                <SelectItem value="+1">🇺🇸 +1</SelectItem>
                                <SelectItem value="+44">🇬🇧 +44</SelectItem>
                                <SelectItem value="+971">🇦🇪 +971</SelectItem>
                                <SelectItem value="+65">🇸🇬 +65</SelectItem>
                            </SelectContent>
                        </Select>
                        <Input
                            type="tel"
                            placeholder="Mobile No *"
                            value={formData.phone}
                            onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                                setFormData({ ...formData, phone: value });
                            }}
                            className="h-12 border-border/50 col-span-2 text-base"
                            required
                            maxLength={10}
                        />
                    </div>

                    <div>
                        <Input
                            type="email"
                            placeholder="E-Mail Address (Optional)"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="h-12 border-border/50 text-base"
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 text-base font-semibold bg-gradient-gold hover:opacity-90 transition-opacity"
                    >
                        {isSubmitting ? "Submitting..." : "Submit & Download"}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                        I authorize company representatives to call, SMS, email or WhatsApp me about its products and offers.
                    </p>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default DownloadBrochureModal;
