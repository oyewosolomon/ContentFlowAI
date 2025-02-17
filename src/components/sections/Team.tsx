import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "David Anderson",
    role: "CEO & Co-founder",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Sarah Martinez",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "James Wilson",
    role: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The innovators behind SmartShelf's revolutionary retail technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                  <p className="text-muted-foreground mb-4">{member.role}</p>
                  <div className="flex gap-3">
                    <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={member.social.twitter} className="text-muted-foreground hover:text-primary">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}