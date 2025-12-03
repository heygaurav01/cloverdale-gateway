// Analytics utility functions (Google Analytics + Microsoft Clarity)
import clarity from "@microsoft/clarity";

declare global {
    interface Window {
        gtag: (
            command: string,
            targetId: string,
            config: Record<string, unknown>
        ) => void;
    }
}

export const CLARITY_PROJECT_ID = "ufodm2z1hj"; // Replace with your actual Clarity project ID

// Initialize Microsoft Clarity
export const initializeClarity = (projectId?: string) => {
    const id = projectId || CLARITY_PROJECT_ID;
    if (id && id !== "YOUR_CLARITY_PROJECT_ID") {
        clarity.init(id);
        console.log("Microsoft Clarity initialized with project ID:", id);
    } else {
        console.warn(
            "Microsoft Clarity project ID not configured. Please set CLARITY_PROJECT_ID in analytics.ts"
        );
    }
};

// Track page views
export const pageview = (url: string) => {
    if (typeof window !== "undefined" && window.gtag) {
        const trackingId = import.meta.env.VITE_GA_TRACKING_ID;
        if (trackingId) {
            window.gtag("config", trackingId, {
                page_path: url,
            });
        }
    }
};

// Track custom events
export const event = (
    action: string,
    category: string,
    label?: string,
    value?: number
) => {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }

    // Also track with Clarity custom tags
    if (clarity) {
        clarity.setTag(`${category}_${action}`, label || action);
    }
};

// Track contact form submissions
export const trackContactForm = (
    formType: "contact" | "callback" | "inquiry"
) => {
    event("form_submit", "engagement", formType);
};

// Track brochure downloads
export const trackBrochureDownload = () => {
    event("download", "engagement", "brochure");
};

// Track phone calls
export const trackPhoneCall = () => {
    event("phone_call", "engagement", "contact");
};

// Track WhatsApp clicks
export const trackWhatsAppClick = () => {
    event("whatsapp_click", "engagement", "contact");
};

// Track gallery image views
export const trackGalleryView = (imageIndex: number) => {
    event("gallery_view", "engagement", `image_${imageIndex}`);
};

// Track floor plan views
export const trackFloorPlanView = (planType: string) => {
    event("floor_plan_view", "engagement", planType);
};

// Track price list views
export const trackPriceListView = () => {
    event("price_list_view", "engagement", "pricing");
};
