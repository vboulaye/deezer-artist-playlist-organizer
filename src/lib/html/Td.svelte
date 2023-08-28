<script lang="ts">
    export let justify: "center" | "start" | "end" = "center"
    export let title=""
</script>

<td style="vertical-align:middle" {title}>
    <div class="flex items-center justify-{justify} gap-x-2 h-full">
        <slot/>
    </div>
</td>