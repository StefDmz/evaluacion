export interface Order {
    id: string;
    clientName: string;
    clientTelephone: string;
    deliveryType: string;
    neighborhood: string;
    street: string;
    exteriorNumber: string;
    interiorNumber: string;
    references: string;
    paymentMethod: string;
    paidWith?: number;
    comentaries: string;
    orderDate: Date;
    tips: number;
    discountId: string;
}