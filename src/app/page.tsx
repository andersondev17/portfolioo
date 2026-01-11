import { HeroSection } from "@/components/hero/HeroSection";
import { Cta } from "@/components/layout/Cta";
import { Projects } from "@/components/work/Projects";
import { about, baseURL, home, person } from "@/resources";
import { Avatar, Badge, Button, Column, Flex, Heading, RevealFx, Row, Schema, Text } from "@once-ui-system/core";

export default function Home() {
  return (
    <Column maxWidth="l" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Flex
        fillWidth
        paddingY="24"
        gap="xl"
        direction="row" // Horizontal en desktop
        mobileDirection="column" // Stack en mobile
        vertical="center"
      >
        {/* Columna izquierda */}
        <Column maxWidth="s" gap="m">
          {home.featured.display && (
            <RevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="32" paddingLeft="12">
              <Badge background="brand-alpha-medium" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false}
                href={home.featured.href}>
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-m">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-s">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="start" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="primary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Flex gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
          </RevealFx>
        </Column>
        {/* Columna R 3D  */}
        <Column fillWidth>
          <HeroSection />
        </Column>
      </Flex>
      
      <RevealFx translateY="16" delay={0.6}>   
        <Projects range={[1, 1]} />
      </RevealFx>

      <Projects range={[2]} />
      <Cta />
    </Column>
  );
}
