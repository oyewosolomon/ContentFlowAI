import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const stories = [
  {
    quote: "SmartShelf has revolutionized our inventory management. We've seen a 35% reduction in stockouts.",
    author: "Sarah Johnson",
    role: "Operations Director, Metro Retail",
    image: "https://images.unsplash.com/photo-1506618403381-77ae408451b7"
  },
  {
    quote: "The real-time analytics have transformed how we make purchasing decisions. Incredible ROI.",
    author: "Michael Chen",
    role: "CEO, FutureMarket",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72"
  }
];

export default function Success() {
  return (
    <section id="success" className="py-24 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Customer Success Stories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how leading retailers are transforming their operations with SmartShelf.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <Quote className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-lg mb-4">{story.quote}</p>
                      <div className="flex items-center gap-4">
                        <img
                          src={story.image}
                          alt={story.author}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold">{story.author}</p>
                          <p className="text-sm text-muted-foreground">{story.role}</p>
                        </div>
                      </div>
                    </div>
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
