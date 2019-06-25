import { Component, h, Prop } from '@stencil/core';
import '@stencil/redux';
import { Store } from '@stencil/redux';
import { drizzleStore } from '../../drizzle/store'; // index required due to bug

@Component({
  tag: 'my-app'
})
export class MyApp {
  @Prop({ context: 'store' }) store: Store;

  componentWillLoad() {
    this.store.setStore(drizzleStore);
  }

  render() {
    return (
      <div>
        <current-block></current-block>
      </div>
    );
  }
}