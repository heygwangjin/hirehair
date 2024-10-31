<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<h1>Login/Register</h1>
<form
	method="post"
	action="?/login"
	use:enhance
	class="mt-2 flex flex-col gap-4 rounded border-2 border-blue-400 p-2"
>
	<label class="flex items-center gap-2">
		Username :
		<input name="username" class="rounded border-2 border-gray-300" />
	</label>
	<label>
		Password :
		<input type="password" name="password" class="rounded border-2 border-gray-300" />
	</label>
	<button>Login</button>
	<button formaction="?/register">Register</button>
</form>
<p style="color: red">{form?.message ?? ''}</p>
