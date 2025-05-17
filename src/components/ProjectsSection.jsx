import { ArrowRight, Database, Server, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const ProjectsData = [
  {
    id: 1,
    titleKey: "projects.1.title",
    descriptionKey: "projects.1.description",
    tags: ["VMware", "bind9", "DHCP", "DNS", "Linux"],
    icon: <Server size={40} className="text-primary mb-2" />,
  },
  {
    id: 2,
    titleKey: "projects.2.title",
    descriptionKey: "projects.2.description",
    tags: ["MySQL", "SQL", "Database Design"],
    icon: <Database size={40} className="text-primary mb-2" />,
  },
  {
    id: 3,
    titleKey: "projects.3.title",
    descriptionKey: "projects.3.description",
    tags: ["CiscoPKT", "Networking", "VLAN", "Routing"],
    icon: <Globe size={40} className="text-primary mb-2" />,
  },
  {
    id: 4,
    titleKey: "projects.4.title",
    descriptionKey: "projects.4.description",
    tags: ["Proxmox", "Zabbix", "NextCloud", "MySQL", "Virtualization"],
    icon: <Server size={40} className="text-primary mb-2" />,
  },
];

export const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("projet")}
          <span className="text-primary">{t("sel")}</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("skill")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ProjectsData.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md card-hover border border-primary/20"
            >
              <div className="p-6">
                <div className="flex justify-center mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  {t(project.titleKey)}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {t(`tags.${tag}`)}
                    </span>
                  ))}
                </div>

                <p className="text-muted-foreground text-sm mb-4 text-center">
                  {t(project.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/stea-tt"
          >
            {t("git")}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
