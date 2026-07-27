import {
  Car, HeartPulse, GraduationCap, Hotel, UtensilsCrossed, Home,
  Dumbbell, Scale, Plane, Hammer, Landmark, Briefcase,
} from "lucide-react";
import type { Industry } from "@/data/industries";

export const INDUSTRY_ICONS: Record<Industry["icon"], typeof Car> = {
  car: Car,
  hospital: HeartPulse,
  school: GraduationCap,
  hotel: Hotel,
  utensils: UtensilsCrossed,
  home: Home,
  dumbbell: Dumbbell,
  scale: Scale,
  plane: Plane,
  hammer: Hammer,
  landmark: Landmark,
  briefcase: Briefcase,
};
