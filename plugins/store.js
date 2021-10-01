import {Store} from '~/api/store'

export default (ctx, inject) => {
  const storeApi = new Store(ctx)

  inject('storeApi', storeApi)
}
