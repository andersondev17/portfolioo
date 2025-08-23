"use client";

import { cta, newsletter, person } from "@/resources";
import { Background, Button, Column, Heading, opacity, Row, SpacingToken, Text } from "@once-ui-system/core";

export const Cta: React.FC<React.ComponentProps<typeof Column>> = ({ ...flex }) => {
    if (!newsletter.display) return null;

    return (
        <Column
            overflow="hidden"
            fillWidth
            padding="xl"
            radius="l"
            marginBottom="m"
            horizontal="center"
            align="center"
            background="surface"
            border="neutral-alpha-weak"
            {...flex}
        >
            <Background
                top="0"
                position="absolute"
                mask={{
                    x: cta.effects.mask.x,
                    y: cta.effects.mask.y,
                    radius: cta.effects.mask.radius,
                    cursor: cta.effects.mask.cursor,
                }}
                gradient={{
                    display: cta.effects.gradient.display,
                    opacity: cta.effects.gradient.opacity as opacity,
                    x: cta.effects.gradient.x,
                    y: cta.effects.gradient.y,
                    width: cta.effects.gradient.width,
                    height: cta.effects.gradient.height,
                    tilt: cta.effects.gradient.tilt,
                    colorStart: cta.effects.gradient.colorStart,
                    colorEnd: cta.effects.gradient.colorEnd,
                }}
                dots={{
                    display: cta.effects.dots.display,
                    opacity: cta.effects.dots.opacity as opacity,
                    size: cta.effects.dots.size as SpacingToken,
                    color: cta.effects.dots.color,
                }}
                grid={{
                    display: cta.effects.grid.display,
                    opacity: cta.effects.grid.opacity as opacity,
                    color: cta.effects.grid.color,
                    width: cta.effects.grid.width,
                    height: cta.effects.grid.height,
                }}
                lines={{
                    display: cta.effects.lines.display,
                    opacity: cta.effects.lines.opacity as opacity,
                    size: cta.effects.lines.size as SpacingToken,
                    thickness: cta.effects.lines.thickness,
                    angle: cta.effects.lines.angle,
                    color: cta.effects.lines.color,
                }}
            />

            <Column maxWidth="xs" horizontal="center">
                <Heading marginBottom="s" variant="display-strong-xs">
                    {newsletter.title}
                </Heading>
                <Text wrap="balance" marginBottom="l" variant="body-default-l" onBackground="neutral-weak">
                    {newsletter.description}
                </Text>
            </Column>
            <Row
                id="mc_embed_signup_scroll"
                fillWidth
                maxWidth={24}
                gap="8"
            >


                <Row height="48" vertical="center" gap="4">
                    <Button
                        id="mc-embedded-subscribe"
                        data-border="rounded"
                        value="download_cv"
                        variant="primary"
                        weight="default"
                        size="m"
                        href="AndersonLopezCV.pdf" download arrowIcon>
                        📄 Download CV
                    </Button>
                    <Button href={`mailto:${person.email}`} variant="primary"
                        weight="default"
                        size="m" arrowIcon>
                        📩 Contact Me
                    </Button>
                </Row>

            </Row>
        </Column >
    );
};
