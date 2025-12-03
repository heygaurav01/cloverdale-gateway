interface FormSubmissionData {
    name: string;
    phone: string;
    email: string;
    countryCode: string;
    message?: string;
    utmCampaign?: string;
    utmSource?: string;
    utmMedium?: string;
}

interface ApiSubmissionData {
    name: string;
    phone: string;
    email: string;
    promotion_code: string;
    ip_address: string;
    message?: string;
    utm_campaign?: string;
    utm_source?: string;
    utm_medium?: string;
}

// Get user's IP address
export const getUserIP = async (): Promise<string> => {
    try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        return data.ip || "0.0.0.0";
    } catch (error) {
        console.error("Failed to get user IP:", error);
        // Fallback IP
        return "0.0.0.0";
    }
};

const getUTMParams = () => {
    if (typeof window === "undefined") {
        return {};
    }

    const params = new URLSearchParams(window.location.search);
    const utmCampaign = params.get("utm_campaign") || undefined;
    const utmSource = params.get("utm_source") || undefined;
    const utmMedium = params.get("utm_medium") || undefined;

    return {
        utmCampaign,
        utmSource,
        utmMedium,
    };
};

// Submit form data to API
export const submitFormData = async (
    formData: FormSubmissionData
): Promise<{ success: boolean; message: string }> => {
    try {
        // Get user's IP address
        const userIP = await getUserIP();

        // Prepare API data
        const utmParams = {
            utmCampaign: formData.utmCampaign,
            utmSource: formData.utmSource,
            utmMedium: formData.utmMedium,
            ...getUTMParams(),
        };

        const apiData: ApiSubmissionData = {
            name: formData.name,
            phone: `${formData.countryCode}${formData.phone}`,
            email: formData.email,
            promotion_code: "cOWNz1ZlckvsOA==",
            ip_address: userIP,
            ...(formData.message ? { message: formData.message } : {}),
            ...(utmParams.utmCampaign ? { utm_campaign: utmParams.utmCampaign } : {}),
            ...(utmParams.utmSource ? { utm_source: utmParams.utmSource } : {}),
            ...(utmParams.utmMedium ? { utm_medium: utmParams.utmMedium } : {}),
        };

        const response = await fetch("http://localhost:4000/api/request", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(apiData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        return {
            success: true,
            message: "Form submitted successfully! We will contact you soon.",
        };
    } catch (error) {
        console.error("API submission error:", error);
        return {
            success: false,
            message: "Failed to submit form. Please try again later.",
        };
    }
};
