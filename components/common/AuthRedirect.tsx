"use client";
import { useRouter } from "next/navigation";
import { useEffect, ReactNode } from "react";

function AuthRedirect({ children }: { children: ReactNode }) {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (!token) router.push("/login");
        else router.push("/");
    }, [router]);

    // if (user) return <></>
    return <>{children}</>;
}

export default AuthRedirect;
