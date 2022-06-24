import { LatLng, Route } from "../domain/route.entity";
import { RouteRepositoryInterface } from "../domain/route.repository";

export class ListAllRoutesUseCase {
  constructor(private routeRepo: RouteRepositoryInterface) {}

  async execute(): Promise<ListAllRoutesOutput> {
    const routes = await this.routeRepo.findAll();

    return routes.map((r) => r.toJSON());
  }
}

type ListAllRoutesOutput = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
  id: string;
}[];
