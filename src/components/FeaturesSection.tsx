import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Bitcoin, Shield, Zap, BarChart3 } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({
  icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="h-full bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
            {icon}
          </div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Bitcoin className="w-6 h-6 text-primary" />,
      title: "Secure Bitcoin Transactions",
      description:
        "Our platform ensures secure and transparent Bitcoin transactions with advanced cryptographic verification and multi-signature security.",
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Enterprise-Grade Security",
      description:
        "Protect your digital assets with our military-grade encryption and secure cold storage solutions designed for institutional clients.",
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Lightning-Fast Settlements",
      description:
        "Experience near-instant transaction settlements with our optimized Lightning Network implementation, reducing wait times and fees.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      title: "Advanced Analytics",
      description:
        "Gain valuable insights with our comprehensive analytics dashboard, tracking performance metrics and market trends in real-time.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Blockchain Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our cutting-edge blockchain technology powers the next generation of
            financial infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
