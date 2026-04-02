import React from 'react'
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

const OrderContent = () => {
    const orders = [
        {
            id: 'ORD-001',
            date: 'Jan 15, 2025',
            status: 'Delivered',
            amount: '$125.00',
        },
        {
            id: 'ORD-002',
            date: 'Jan 08, 2025',
            status: 'In Transit',
            amount: '$89.99',
        },
        {
            id: 'ORD-003',
            date: 'Dec 28, 2024',
            status: 'Delivered',
            amount: '$234.50',
        },
        {
            id: 'ORD-004',
            date: 'Dec 20, 2024',
            status: 'Cancelled',
            amount: '$75.00',
        },
        {
            id: 'ORD-005',
            date: 'Dec 10, 2024',
            status: 'Delivered',
            amount: '$156.75',
        },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Delivered':
                return 'bg-green-50 text-green-700 border-green-200';
            case 'In Transit':
                return 'bg-blue-50 text-blue-700 border-blue-200';
            case 'Cancelled':
                return 'bg-red-50 text-red-700 border-red-200';
            default:
                return 'bg-gray-50 text-gray-700 border-gray-200';
        }
    };

    return (
        <div className="p-6 md:p-8 max-w-4xl">
            <h1 className="text-3xl font-bold text-foreground mb-8">My Orders</h1>

            <Card className="border border-border overflow-hidden">
                {/* Desktop Table */}
                <div className="hidden md:block">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-border bg-gray-50">
                                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Order ID</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Date</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                                <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={order.id} className={index !== orders.length - 1 ? 'border-b border-border' : ''}>
                                    <td className="px-6 py-4 text-sm font-medium text-foreground">{order.id}</td>
                                    <td className="px-6 py-4 text-sm text-muted-foreground">{order.date}</td>
                                    <td className="px-6 py-4">
                                        <Badge variant="outline" className={`${getStatusColor(order.status)}`}>
                                            {order.status}
                                        </Badge>
                                    </td>
                                    <td className="px-6 py-4 text-right text-sm font-medium text-foreground">{order.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden divide-y divide-border">
                    {orders.map((order) => (
                        <div key={order.id} className="p-4">
                            <div className="flex items-center justify-between mb-3">
                                <span className="font-semibold text-foreground">{order.id}</span>
                                <Badge variant="outline" className={`${getStatusColor(order.status)}`}>
                                    {order.status}
                                </Badge>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">{order.date}</span>
                                <span className="font-medium text-foreground">{order.amount}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>

    )
}

export default OrderContent
