import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-cream px-4">
            <div className="text-center max-w-lg mx-auto animate-fade-in-up">
                <div className="mb-6 flex justify-center">
                    <div className="bg-green-100 p-4 rounded-full">
                        <CheckCircle className="w-16 h-16 text-green-600" />
                    </div>
                </div>
                <h1 className="text-4xl font-serif font-bold mb-4 text-foreground">
                    Thank You!
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                    Your submission has been received successfully. Our team will get back to you shortly.
                </p>
                <Link to="/">
                    <Button className="btn-gold min-w-[200px]">
                        Back to Home
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ThankYou;
