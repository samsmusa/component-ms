'use client';

import React, { useCallback, useMemo } from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OverviewTab from "@/components/page/dashboard/tabs/OverviewTab";
import ServiceTab from "@/components/page/dashboard/tabs/ServiceTab";
import OrdersTab from "@/components/page/dashboard/tabs/OrdersTab";
import TicketTab from "@/components/page/dashboard/tabs/TicketTab";
import DepositeTab from "@/components/page/dashboard/tabs/DepositeTab";
import { useUpdateQueryParams } from "@/core/common/functions";

const tabConfig = [
    { key: "overview", label: "Overview", component: <OverviewTab /> },
    { key: "orders", label: "Orders", component: <OrdersTab /> },
    { key: "deposits", label: "Deposits", component: <DepositeTab /> },
    { key: "tickets", label: "Tickets", component: <TicketTab /> },
    { key: "services", label: "Services", component: <ServiceTab /> },
];

const DashboardTab = () => {
    const { updateQueryParams, searchParams } = useUpdateQueryParams();
    const currentTab = searchParams.get("tab") || "overview";

    const handleTabChange = useCallback(
        (tab: string | undefined) => {
            updateQueryParams({ tab });
        },
        [updateQueryParams]
    );

    const activeTabContent = useMemo(() => {
        const activeTab = tabConfig.find(tab => tab.key === currentTab);
        return activeTab ? activeTab.component : <OverviewTab />;
    }, [currentTab]);

    return (
        <Tabs defaultValue={currentTab} value={currentTab} onValueChange={(tab) => handleTabChange(tab)} className="space-y-4">
            <TabsList className='gap-2'>
                {tabConfig.map(({ key, label }) => (
                    <TabsTrigger className='bg-primary text-primary-foreground shadow hover:bg-primary/90' key={key} value={key}>
                        {label}
                    </TabsTrigger>
                ))}
            </TabsList>
            {activeTabContent}
        </Tabs>
    );
};

export default React.memo(DashboardTab);
