<script setup>
import { defineProps, onMounted } from "vue";
const props = defineProps({
    data: Object,
    currentCategory: String,
});

onMounted(() => {
    console.log(data, currentCategory);
});
</script>
<template>
    <div
        class="border-2 border-gray-300 bg-white flex grid-cols-12 gap-3 p-3 pr-5 relative"
    >
        <div class="col-span-3">
            <img :src="data.icon_url" alt="" />
        </div>
        <div class="col-span-9">
            <div class="text-2xl text-red-500 font-bold">
                {{ currentCategory }}
            </div>
            <small
                ><div class="text-xs">
                    {{ new Date(data.created_at).toLocaleString() }}
                </div></small
            >
            <ul>
                <li class="flex items-center gap-1">
                    <span><img class="h-4" src="/tag.webp" alt="" /></span
                    >something something
                </li>
            </ul>
        </div>
        <div class="absolute bottom-3 right-3 text-orange-400">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="size-8"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                />
            </svg>
        </div>
    </div>
</template>
