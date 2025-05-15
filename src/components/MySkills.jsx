import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    //developpement
    { name: "HTML/CSS", level: 70, category: "developpement" },
    { name: "React", level: 50, category: "developpement" },
    { name: "TailwindCSS", level: 50, category: "developpement" },
    { name: "JavaScript", level: 60, category: "developpement" },
    { name: "Python", level: 70, category: "developpement" },
    { name: "C", level: 55, category: "developpement" },

    //tools
    { name: "VMware", level: 85, category: "tools" },
    { name: "VScode", level: 75, category: "tools" },
    { name: "CiscoPKT", level: 75, category: "tools" },
    { name: "Azure", level: 60, category: "tools" },
    
    //Technologies & Systems
    { name: "Mysql", level: 65, category: "Technologies & Systems" },
    { name: "Linux", level: 75, category: "Technologies & Systems" },
    { name: "Windows/Server", level: 75, category: "Technologies & Systems" },
    { name: "Splunk", level: 45, category: "Technologies & Systems" },
    { name: "Zabbix", level: 65, category: "Technologies & Systems" },
    { name: "Pfense", level: 70, category: "Technologies & Systems" },
    { name: "NextCloud", level: 65, category: "Technologies & Systems" },
    { name: "Proxmox", level: 65, category: "Technologies & Systems" },
    { name: "Admin sys", level: 75, category: "Technologies & Systems" },
    { name: "Networking", level: 75, category: "Technologies & Systems" },
];

const categories = ["all", "developpement", "tools", "Technologies & Systems"];

export const MySkills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};