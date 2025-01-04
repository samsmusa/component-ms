import {MobileNav} from "@/components/core/navbar/MobileNav";
import {DeskNavbar} from "@/components/core/navbar/DeskNavbar";


export default async function Navbar() {
    return (
        <div>
            <DeskNavbar/>
            <MobileNav/>
        </div>
    )
}