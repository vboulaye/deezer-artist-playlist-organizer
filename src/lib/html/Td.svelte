<script lang="ts">
    export let justify: "center" | "start" | "end" = "center"
</script>

<td style="vertical-align:middle">
    <div class="flex items-center justify-{justify} gap-x-2 h-full">
        <slot/>
    </div>
</td>