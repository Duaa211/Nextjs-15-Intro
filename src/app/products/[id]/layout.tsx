import {ReactNode} from "react";

export default function ProductLayout({children,}: { children: ReactNode }) {
    return (
        <div>
            {children}
            <div>
                <h1>Featured Products</h1>
            </div>
        </div>
    );
}