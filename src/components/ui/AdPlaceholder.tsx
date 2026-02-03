import React from 'react';
import { cn } from '@/lib/utils';

interface AdPlaceholderProps {
    width?: number | string;
    height?: number | string;
    className?: string;
    label?: string;
}

export default function AdPlaceholder({
    width = "100%",
    height = 250,
    className,
    label = "Advertisement"
}: AdPlaceholderProps) {
    return (
        <div
            className={cn(
                "flex items-center justify-center bg-muted/50 border-2 border-dashed border-muted-foreground/20 rounded-lg overflow-hidden",
                className
            )}
            style={{ width, height }}
        >
            <div className="text-center">
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold block mb-1">
                    {label}
                </span>
                <span className="text-[10px] text-muted-foreground/60 block">
                    Space reserved for Ad Unit
                </span>
            </div>

            {/* 
        INSTRUCTIONS FOR USER:
        When your AdSense/Media.net account is approved, you will replace the content of this div 
        with your actual script code.
        
        Example:
        <div id="ad-slot-123">
           <script>...</script>
           <ins>...</ins>
        </div>
      */}
        </div>
    );
}
