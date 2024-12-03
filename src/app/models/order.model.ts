export class Order {
    id: string;
    status: string;
    totalPrice: number;
    items: any[]; // You can define a more detailed type for the items if needed
    userId: number;
  
    constructor(id: string, status: string, totalPrice: number, items: any[], userId: number) {
      this.id = id;
      this.status = status;
      this.totalPrice = totalPrice;
      this.items = items;
      this.userId = userId;
    }
  }
  