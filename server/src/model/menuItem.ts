interface menuItem {
    readonly id: number; // Inherit from database and keep from changing
    name: string;
    description: string | null; // Optional description
    price: number;
    category: string; // For sorting when displaying full menu
    image_url: string | null; // nullable so we can add items before getting pictures. Can add placeholder picture on frontend perhaps
}