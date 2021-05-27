<template>
    {{text}}
    <button @click="onClick">Click me</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        function onClick() {
            console.log("button clicked");
        }

        return {
            text: "Hello world!",
            onCick
        };
    }
});

</script>