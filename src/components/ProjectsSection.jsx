import { ExternalLink, Github, ArrowRight, Database, Server, Globe } from "lucide-react";

const Projects = [
    {
        id: 1,
        title: "Administration Système - DNS & DHCP",
        description: "Mise en place d'un serveur DHCP avec un DNS dynamique sous VMware utilisant bind9 pour une infrastructure réseau sécurisée et fiable.",
        // image: "/api/placeholder/600/400",
        tags: ["VMware", "bind9", "DHCP", "DNS", "Linux"],
        icon: <Server size={40} className="text-primary mb-2" />
    },
    {
        id: 2,
        title: "Système de location de véhicules",
        description: "Conception et implémentation d'une base de données SQL pour une entreprise de location gérant 50 véhicules et 100 clients avec interface de gestion.",
        image: "/api/placeholder/600/400",
        tags: ["MySQL", "SQL", "Database Design"],
        icon: <Database size={40} className="text-primary mb-2" />
    },
    {
        id: 3,
        title: "Architecture Réseau Multi-Sites",
        description: "Conception d'un réseau d'entreprise répartie sur 4 pays avec 1000 PC et communication inter-VLAN, implémenté via Cisco Packet Tracer.",
        image: "/api/placeholder/600/400",
        tags: ["CiscoPKT", "Networking", "VLAN", "Routing"],
        icon: <Globe size={40} className="text-primary mb-2" />
    },
    {
        id: 4,
        title: "Environnement de Virtualisation Sécurisé",
        description: "Déploiement d'une infrastructure virtuelle avec Proxmox incluant Zabbix pour le monitoring, NextCloud pour le stockage et MySQL pour la gestion des données.",
        image: "/api/placeholder/600/400",
        tags: ["Proxmox", "Zabbix", "NextCloud", "MySQL", "Virtualization"],
        icon: <Server size={40} className="text-primary mb-2" />
    },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Découvrez une sélection de mes projets en administration système, réseau et cybersécurité. 
          Ces réalisations illustrent mes compétences techniques et ma capacité à concevoir des solutions sécurisées.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-md card-hover border border-primary/20"
            >
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 text-center">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/stea-tt"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};