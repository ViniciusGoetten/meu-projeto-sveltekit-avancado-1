<script>
    export let data;
</script>

<h1>Lista de Usuários</h1>

<ul>
    {#each data.users as user}
        <li>
            <a href={`/03/dummy/users/${user.id}`}>
                {user.firstName} {user.lastName} ({user.username})
            </a>
        </li>
    {/each}
</ul>