export interface Order {
    clientName: string;
    clientTelephone: string;
    deliveryType: string;
    neighborhood: string;
    street: string;
    exteriorNumber: string;
    interiorNumber: string;
    references: string;
    paymentMethod: string;
    comentaries: string;
    orderDate: Date;
    tips: number;
    discountId: string;
}