import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { BarChart } from "@/components/ui/chart";

export default function Analytics() {
  const data = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 500 },
    { name: "Apr", value: 450 },
    { name: "May", value: 600 },
    { name: "Jun", value: 550 }
  ];

  return (
    <section id="analytics" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Powerful Analytics Dashboard
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get actionable insights from your retail data with our intuitive analytics platform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h4 className="font-semibold mb-4">Sales Performance</h4>
                <div className="w-full overflow-x-auto">
                  <BarChart
                    data={data}
                    index="name"
                    categories={["value"]}
                    colors={["primary"]}
                    valueFormatter={(value) => `$${value}`}
                    className="min-w-[300px] h-[200px] sm:h-[300px]"
                  />
                </div>
              </div>
              <div className="order-first lg:order-last">
                <img
                  src="https://images.unsplash.com/photo-1556155092-490a1ba16284"
                  alt="Analytics Dashboard"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
