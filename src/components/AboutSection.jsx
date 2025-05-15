import {Code, Cpu, User} from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 border-2 border-primary p-6 rounded-4xl">

            <p className="text-muted-foreground text-justify">
              Je suis Simon Boisneault, étudiant en deuxième année de Bachelor en Ingénierie et Cybersécurité à EFREI Paris. Passionné par l'analyse des vulnérabilités et l'administration des systèmes, je suis constamment à la recherche de nouvelles opportunités pour approfondir mes connaissances dans le domaine de la sécurité informatique. Mon parcours académique, complété par des expériences professionnelles variées, m'a permis de développer une solide compréhension des enjeux de la cybersécurité moderne.
            </p>

            <p className="text-muted-foreground text-justify">
              Mes compétences techniques incluent la maîtrise de langages comme Python et C, le développement web, ainsi que la gestion de systèmes Linux et Windows Server. J'ai également acquis une expérience pratique dans la sécurisation des réseaux, la protection des données et la virtualisation avec VMware. Mon stage récent chez TVHconsulting m'a permis de travailler sur des projets concrets comme la cartographie réseau, le paramétrage de solutions de sécurité et la migration vers Intune, renforçant ainsi mon expertise en cybersécurité opérationnelle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="hacker-button">
                Get In Touch
              </a>

              <a
                href="  /CV-Simon-Boisneault-alternance.pdf"
                download={true}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Cybersecurity</h4>
                  <p className="text-muted-foreground">
                    Analyse de vulnérabilités, sécurisation de réseaux, protection des données et mise en place de systèmes de détection d'intrusion avec des outils comme Sophos et Cyberwatch.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                                <div className="text-left">
                  <h4 className="font-semibold text-lg">Développement</h4>
                  <p className="text-muted-foreground">
                    Compétences en programmation avec Python, C, HTML et JavaScript. Création de scripts d'automatisation et développement de solutions pour renforcer la sécurité des systèmes.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Administration Système</h4>
                  <p className="text-muted-foreground">
                    Gestion de machines virtuelles (Debian, pfSense, Kali, Windows Server), configuration de serveurs DNS et DHCP, et administration de réseaux complexes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );  
};
