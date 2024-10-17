<script setup>
import { defineProps, onMounted } from "vue";
const props = defineProps({
    data: Object,
    currentCategory: String,
});
</script>
<template>
    <div
        class="border-2 border-gray-300 bg-white flex gap-3 p-3 pr-5 relative items-center"
    >
        <div class="w-[30%]">
            <img :src="data.icon_url" class="w-full" alt="" />
        </div>
        <div class="w-[70%]">
            <div class="text-2xl text-red-500 font-bold">
                {{ currentCategory }}
            </div>
            <small
                ><div class="text-xs">
                    {{ new Date(data.created_at).toLocaleString() }}
                </div></small
            >
            <ul class="flex flex-col gap-1 text-xs">
                <li class="flex">
                    <span><img class="h-4 w-7" src="/tag.webp" alt="" /></span
                    >ID: {{ data.id }}
                </li>
                <li class="flex">
                    <span><img class="h-4 w-7" src="/tag.webp" alt="" /></span
                    >Updated: {{ new Date(data.updated_at).toLocaleString() }}
                </li>
                <li class="flex items-center gap-1">
                    <span><img class="h-4 w-7" src="/tag.webp" alt="" /></span
                    >{{ data.value.slice(0, 50) }}
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
