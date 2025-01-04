import React from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {TabsContent} from "@/components/ui/tabs";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {CreditCard, Landmark} from "lucide-react";
import {DataTable} from "@/components/page/dashboard/tabs/components/data-table";
import {deposits} from "@/components/page/dashboard/tabs/data/orders";
import {depositColumns} from "@/components/page/dashboard/tabs/components/depositColumns";
import {DataTableToolbar} from "@/components/page/dashboard/tabs/components/data-table-toolbar";

const DepositTab = () => {
    return (
        <TabsContent value="deposits" className="space-y-4 min-h-screen">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="">
                    <CardHeader>
                        <CardTitle>Add Money to Your Account</CardTitle>
                        <CardDescription>Choose your preferred payment method and enter the amount you
                            wish to deposit.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="amount">Amount</Label>
                                    <div className="relative">
                                                        <span
                                                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                                        <Input
                                            id="amount"
                                            type="number"
                                            placeholder="0.00"
                                            // value={amount}
                                            // onChange={(e) => setAmount(e.target.value)}
                                            className="pl-7"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Payment Method</Label>
                                    <RadioGroup
                                        // value={paymentMethod} onValueChange={setPaymentMethod}
                                    >
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="credit-card" id="credit-card"/>
                                            <Label htmlFor="credit-card" className="flex items-center">
                                                <CreditCard className="mr-2 h-4 w-4"/>
                                                Credit Card
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="paypal" id="paypal"/>
                                            <Label htmlFor="paypal" className="flex items-center">
                                                {/*<Paypal className="mr-2 h-4 w-4"/>*/}
                                                PayPal
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="bank-transfer" id="bank-transfer"/>
                                            <Label htmlFor="bank-transfer"
                                                   className="flex items-center">
                                                <Landmark className="mr-2 h-4 w-4"/>
                                                Bank Transfer
                                            </Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                            </div>
                            <Button type="submit" className="w-full mt-4">Deposit</Button>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <p className="text-sm text-gray-500">Funds will be available in your account
                            immediately after the deposit is processed.</p>
                    </CardFooter>
                </Card>
                <div className="col-span-3">
                    <DataTable Toolbar={DataTableToolbar} data={deposits} columns={depositColumns}/>
                </div>
            </div>
        </TabsContent>
    );
};

export default DepositTab;