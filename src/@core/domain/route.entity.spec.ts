import { LatLng, Route, RouteProps } from "./route.entity";

describe("Rout Test", () => {
  test("constructor", () => {
    let routeProps: RouteProps = {
      title: "minha rota",
      startPosition: { lat: 10, lng: 4 },
      endPosition: { lat: 10, lng: 4 },
    };

    let route = new Route(routeProps);

    expect(route.props).toStrictEqual({ ...routeProps, points: [] });

    routeProps = {
      ...routeProps,
      points: [{ lat: 10, lng: 10 }],
    };

    route = new Route(routeProps);

    expect(route.id).toBeDefined();
    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [{ lat: 10, lng: 10 }],
    });
  });

  test("updateTitle method", () => {
    const routeProps: RouteProps = {
      title: "minha rota",
      startPosition: { lat: 10, lng: 4 },
      endPosition: { lat: 10, lng: 4 },
    };

    let route = new Route(routeProps);

    const titleUpdated = "updated";

    route.updateTitle(titleUpdated);

    expect(route.title).toBe(titleUpdated);
  });

  test("updatePosition method", () => {
    const routeProps: RouteProps = {
      title: "minha rota",
      startPosition: { lat: 10, lng: 4 },
      endPosition: { lat: 10, lng: 4 },
    };

    let route = new Route(routeProps);

    const startPosition: LatLng = { lat: 10, lng: 20 };
    const endPosition: LatLng = { lat: 20, lng: 40 };

    route.updatePosition(startPosition, endPosition);

    expect(route.startPosition).toBe(startPosition);
    expect(route.endPosition).toBe(endPosition);
  });

  test("updatePoints method", () => {
    const routeProps: RouteProps = {
      title: "minha rota",
      startPosition: { lat: 10, lng: 4 },
      endPosition: { lat: 10, lng: 4 },
    };

    let route = new Route(routeProps);

    const points: LatLng[] = [{ lat: 10, lng: 20 }];

    route.updatePoints(points);

    expect(route.points).toHaveLength(1);
  });

  test("updatePosition method", () => {
    const routeProps: RouteProps = {
      title: "minha rota",
      startPosition: { lat: 10, lng: 4 },
      endPosition: { lat: 10, lng: 4 },
    };

    let route = new Route(routeProps);

    const startPosition: LatLng = { lat: 10, lng: 20 };
    const endPosition: LatLng = { lat: 20, lng: 40 };

    route.updatePosition(startPosition, endPosition);

    expect(route.startPosition).toBe(startPosition);
    expect(route.endPosition).toBe(endPosition);
  });
});
