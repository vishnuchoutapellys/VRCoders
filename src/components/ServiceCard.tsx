import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Service } from "../data/siteContent";
import Reveal from "./Reveal";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <Reveal delay={(index % 4) * 0.06}>
      <article className="service-card">
        <div className="service-icon"><Icon size={20} strokeWidth={1.6} aria-hidden="true" /></div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <Link className="card-link" to="/contact" aria-label={`Explore ${service.title}`}>
          Explore <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </article>
    </Reveal>
  );
}
