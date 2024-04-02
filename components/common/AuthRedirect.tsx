"use client";
import { getAccessTokenFromCookie } from "@/utils/storage";
import { useRouter } from "next/navigation";
import { useEffect, ReactNode } from "react";

function AuthRedirect({ children }: { children: ReactNode }) {
    const router = useRouter();

    useEffect(() => {
        const token = getAccessTokenFromCookie();
        if (!token) router.push("/login");
        else router.push("/");
    }, [router]);

    // if (user) return <></>
    return <>{children}</>;
}

export default AuthRedirect;
