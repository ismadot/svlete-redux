<script lang="ts">
  import { setUsername } from './store/actions/appActions';
  import { useSelector } from './store/common/utils';
  import { store } from './store/config';

  let localUsername: string = '';
  let userName: string = '';
  const updateUsername = () => {
    store.dispatch(setUsername(localUsername));
  };

  $: useSelector(
    (state) => state.app.username,
    (name) => (userName = name),
  );
</script>

<div>
  <label for="username">Your Name:</label>
  <input
    type="text"
    id="username"
    bind:value={localUsername}
    placeholder="Enter your name"
  />
  <button on:click={updateUsername}>Update Name</button>
  <p>Stored username by store: {$store.app.username}</p>
  <p>Stored username by side effect: {userName}</p>
</div>
