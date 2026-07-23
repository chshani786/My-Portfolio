import { useEffect, useState } from "react";

// counterapi.dev — free, no account required.
// GET /v1/{namespace}/{key}/up  → increments and returns { id, name, count, ... }
const COUNTER_URL =
    "https://api.counterapi.dev/v1/marslan-portfolio-pk/visits/up";

export function useVisitorCount(): number | null {
    const [count, setCount] = useState<number | null>(null);

    useEffect(() => {
        fetch(COUNTER_URL)
            .then((r) => r.json())
            .then((d) => setCount(d.count as number))
            .catch(() => {}); // fail silently — badge simply won't render
    }, []);

    return count;
}

export function formatCount(n: number): string {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
    if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
    return String(n);
}
