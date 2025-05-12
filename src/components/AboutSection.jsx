import {Code, Cpu, User} from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">

            <p className="text-muted-foreground">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi doloremque, laborum odio veniam mollitia, vero quos culpa ad accusamus voluptas dolor temporibus, similique laboriosam et illo deleniti necessitatibus placeat ipsam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure atque, quidem officiis modi amet deleniti ratione dicta, impedit nulla facere aut dolorum fugiat voluptates magni, sapiente itaque dignissimos! Corrupti, repellat.
            </p>

            <p className="text-muted-foreground">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ipsa quia dolor itaque architecto praesentium enim molestias, debitis ducimus nisi voluptatum repellat non dolorum, necessitatibus molestiae tempora, ea eius mollitia? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt minima minus dignissimos quam repellat praesentium molestias? A labore placeat sed, perferendis, dignissimos recusandae aut aperiam autem tempore libero asperiores quis.
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
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );  
};
