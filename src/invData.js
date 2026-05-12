import {reactive} from "vue";

let invData = reactive({
    invoiceID: "INV-2026-001",
    billingAddress: "123 Main Street, Dhaka, Bangladesh",
    shippingAddress: "456 Market Road, Chittagong, Bangladesh",
    date: "2026-05-12",
    dueDate: "2026-05-20",
    poNumber: "PO-78945",
    items: [
        {
            name: "Laptop",
            quantity: 2,
            rate: 55000,
            amount: 110000
        },
        {
            name: "Wireless Mouse",
            quantity: 5,
            rate: 1200,
            amount: 6000
        },
        {
            name: "Keyboard",
            quantity: 3,
            rate: 2500,
            amount: 7500
        },
        {
            name: "Web Hosting (Annual Plan)",
            quantity: 1,
            rate: 15000,
            amount: 15000
        },
        {
            name: "Domain Registration (.com)",
            quantity: 2,
            rate: 1200,
            amount: 2400
        },
        {
            name: "SSL Certificate",
            quantity: 1,
            rate: 3500,
            amount: 3500
        },
    ],
    notes: "Thank you for your business.",
    terms: "Payment due within 7 days.",
    subTotal: 123500,
    tax: 3705, // e.g. 3% VAT
    total: 127205
});

export {invData}