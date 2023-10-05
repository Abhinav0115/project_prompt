import Link from "next/link";
import React from "react";

const NotFound = () => {
    return (
        <div>
            <h1 className="text-xl font-semibold ">
                This requested page does not exist.
            </h1>
            <Link href="/" className="mt-4 black_btn">
                Home
            </Link>
        </div>
    );
};

export default NotFound;
