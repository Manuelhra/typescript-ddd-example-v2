import * as awilix from 'awilix';

import { StatusGetController } from '../controllers/StatusGetController';

const container = awilix.createContainer<{ statusGetController: StatusGetController }>({ injectionMode: awilix.InjectionMode.PROXY });

container.register({
    statusGetController: awilix.asClass(StatusGetController),
})

export const statusGetController = container.resolve('statusGetController');