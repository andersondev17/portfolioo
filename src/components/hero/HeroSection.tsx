'use client'

import { RevealFx } from '@once-ui-system/core';
import dynamic from 'next/dynamic';

const HeroExperience = dynamic(
    () => import('@/components/hero/HeroExperience'),
    { ssr: false }
);

export function HeroSection() {
    return (
        <RevealFx translateY="12" delay={0.5} fillWidth>
            <div style={{ width: '100%', height: '70vh', minHeight: '500px' }}>
                <HeroExperience />
            </div>
        </RevealFx>
    );
}