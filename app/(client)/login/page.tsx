import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {LogIN} from "@/components/page/authentication/LogIN";
import {SignUP} from "@/components/page/authentication/SignUP";

export default function AuthPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 flex items-center justify-center p-4">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">Welcome to SaaSy</h1>
                        <p className="text-gray-600 mt-2">Sign in or create an account to get started</p>
                    </div>
                    <Tabs defaultValue="login" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="login">Login</TabsTrigger>
                            <TabsTrigger value="signup">Sign Up</TabsTrigger>
                        </TabsList>
                        <TabsContent value="login">
                            <LogIN />
                        </TabsContent>
                        <TabsContent value="signup">
                            <SignUP />
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
        </div>
    )
}

