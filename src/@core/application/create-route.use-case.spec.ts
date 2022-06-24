import { RouteInMemoryRepository } from "../infra/db/route-in-memory.repository";
import { CreateRouteUseCase } from "./create-route.use-case";

describe("CreateRouteUseCase Tests", () => {
  it("should create a new route", async () => {
    const repository = new RouteInMemoryRepository();
    const createUseCase = new CreateRouteUseCase(repository);

    const input = {
      title: "minha rota",
      startPosition: { lat: 10, lng: 4 },
      endPosition: { lat: 10, lng: 4 },
    };

    const output = await createUseCase.execute(input);

    expect(output).toStrictEqual({
      ...input,
      points: [],
      id: repository.items[0].id,
    });
    expect(repository.items).toHaveLength(1);
  });
});
