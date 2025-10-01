import { ServiceItem } from "@/app/types/service";
import {
  SKIN_SERVICES,
  BODY_SERVICES,
  HEALTH_WELLNESS_SERVICES,
} from "@/app/services/serviceData";

export type ServiceCategory = "skin" | "body" | "health-wellness";

/**
 * Determines which category a service belongs to based on the service title
 * @param serviceTitle - The title of the service
 * @returns The category the service belongs to, or null if not found
 */
export function getServiceCategory(
  serviceTitle: string
): ServiceCategory | null {
  // Normalize the service title for comparison
  const normalizedTitle = serviceTitle.toLowerCase().replace(/\s+/g, "-");

  // Check if service exists in SKIN_SERVICES
  const skinService = SKIN_SERVICES.find(
    (service) =>
      service.title.toLowerCase().replace(/\s+/g, "-") === normalizedTitle
  );
  if (skinService) return "skin";

  // Check if service exists in BODY_SERVICES
  const bodyService = BODY_SERVICES.find(
    (service) =>
      service.title.toLowerCase().replace(/\s+/g, "-") === normalizedTitle
  );
  if (bodyService) return "body";

  // Check if service exists in HEALTH_WELLNESS_SERVICES
  const healthService = HEALTH_WELLNESS_SERVICES.find(
    (service) =>
      service.title.toLowerCase().replace(/\s+/g, "-") === normalizedTitle
  );
  if (healthService) return "health-wellness";

  return null;
}

/**
 * Gets all services from all categories
 * @returns Combined array of all services
 */
export function getAllServices(): ServiceItem[] {
  return [...SKIN_SERVICES, ...BODY_SERVICES, ...HEALTH_WELLNESS_SERVICES];
}
