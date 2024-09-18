// import Logo from "./sab-logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="p-4">
            <Link href="/">
                <Image  src="/sab-logo.png" alt="Super Amador Brothers" width={70} height={70} />
            </Link>
        </header>
    );
}