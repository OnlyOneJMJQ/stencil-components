import { Component, h, Prop, State } from '@stencil/core';
import { Store } from '@stencil/redux';

@Component({
  tag: 'current-block',
  styleUrl: 'current-block.css'
})
export class MyApp {
  @Prop({ context: 'store' }) store: Store;

  @State() number: number;
  @State() hash: any;

  componentWillLoad() {
    this.store.mapStateToProps(this, (state) => {
      const {
        currentBlock: { number, hash }
      } = state;

      return {
        number, hash
      }
    });
  }

  render() {
    return (
      <div>
        The current block number is: {this.number}<br/>
        The current block hash is: {this.hash}
      </div>
    );
  }
}