import { Module } from '@nestjs/common';
import { CreateRouteUseCase } from './@core/application/create-route.use-case';
import { ListAllRoutesUseCase } from './@core/application/list-all-routes.use-case';
import { RouteRepositoryInterface } from './@core/domain/route.repository';
import { RouteInMemoryRepository } from './@core/infra/db/route-in-memory.repository';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutesController } from './routes/routes.controller';
import { RoutesModule } from './routes/routes.module';
import { RoutesService } from './routes/routes.service';

@Module({
  controllers: [RoutesController],
  providers: [
    RoutesService,
    {
      provide: RouteInMemoryRepository,
      useClass: RouteInMemoryRepository,
    },
    {
      provide: CreateRouteUseCase,
      useFactory: (routeRepository: RouteRepositoryInterface) =>
        new CreateRouteUseCase(routeRepository),
      inject: [RouteInMemoryRepository],
    },
    {
      provide: ListAllRoutesUseCase,
      useFactory: (routeRepository: RouteRepositoryInterface) =>
        new ListAllRoutesUseCase(routeRepository),
      inject: [RouteInMemoryRepository],
    },
  ],
})
export class AppModule {}
