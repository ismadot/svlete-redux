<script lang="ts">
  import { addMinus, addPlus } from './store/actions/appActions';
  import { store } from './store/config';

  let count: number = 0;
  const increment = () => {
    count += 1;
  };
  const incrementByStore = () => {
    store.dispatch(addPlus());
  };
  const decrementByStore = () => {
    store.dispatch(addMinus());
  };
</script>

<div>
  <button on:click={increment}>
    count local state is {count}
  </button>
</div>
<br />
<br />
<div>
  <button on:click={incrementByStore}> store count increment </button>
  <button>
    store count is {$store.app.counter}
  </button>
  <button on:click={decrementByStore}> store count decrement </button>
</div>
