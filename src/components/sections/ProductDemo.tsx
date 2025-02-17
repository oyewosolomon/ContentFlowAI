import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function ProductDemo() {
  return (
    <section id="demo" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            See SmartShelf in Action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Watch how our IoT-powered shelves revolutionize retail inventory management
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
       
            <Card className="overflow-hidden">
              <div className="relative aspect-video bg-muted">
                {/* Replace src with actual demo video URL */}
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/MtSojiNQH_4?si=anhnp_Sw258sTv1m"
                  title="SmartShelf Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">
                  Smart Inventory Management Demo
                </h3>
                <p className="text-muted-foreground mb-4">
                  See how SmartShelf automatically tracks inventory, generates insights, and optimizes stock levels.
                </p>
                <Button className="gap-2">
                  <Play className="h-4 w-4" /> Watch Full Demo
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
