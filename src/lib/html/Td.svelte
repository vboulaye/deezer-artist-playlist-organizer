<script lang="ts">
    export let justify: "center" | "start" | "end" = "center"
    export let title = ""

    let clazz = ""
    // creates a `class` property, even
    // though it is a reserved word
    export {clazz as class};
</script>

<td style="vertical-align:middle" {title} class={clazz}>
    <div class="flex items-center justify-{justify} gap-x-2 h-full">
        <slot/>
    </div>
</td>