import Image from 'next/image'
import Link from "next/link";

const Navbar = () => {
    const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });
    return (
        <nav className="border-b border-gray-200 bg-white">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 py-10 sm:px-6 lg:px-8">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white">
                        <Image
                            src="/logo-icon.png"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className='h-6 w-6'
                        />
                    </div>

                    <div className="leading-tight">
                        <h1 className="text-lg font-bold text-gray-900">
                            বাজার দর
                        </h1>
                        <p className="text-[10px] text-gray-500">
                            {date}
                        </p>
                    </div>
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-3 sm:gap-6">
                    <Link
                        href="/login"
                        className="text-sm font-medium text-gray-700 transition hover:text-green-600"
                    >
                        সাইন ইন
                    </Link>

                    <Link
                        href="/register"
                        className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-green-700"
                    >
                        সাইন আপ
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;