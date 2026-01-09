import { ProjectCard } from "@/components";
import { BlurFade } from "@/components/ui/blur-fade";
import { getPosts } from "@/utils/utils";

interface ProjectsProps {
  range?: [number, number?]
}

export function Projects({ range }: ProjectsProps) {
  const allProjects = getPosts(["src", "app", "work", "projects"])

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  })

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects

  return (
    <div className="flex w-full flex-col gap-8 px-6 pb-10">
      {displayedProjects.map((post, index) => (
        <BlurFade key={post.slug} delay={index * 0.1} inView direction="up" offset={24} duration={0.5}>
          <ProjectCard
            priority={index < 2}
            href={`/work/${post.slug}`}
            images={post.metadata.images}
            title={post.metadata.title}
            description={post.metadata.summary}
            content={post.content}
            avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
            link={post.metadata.link || ""}
          />
        </BlurFade>
      ))}
    </div>
  )
}
