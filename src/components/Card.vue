<script setup>
import { defineProps, onMounted } from "vue";
const props = defineProps({
    data: Object,
    currentCategory: String,
});
</script>

<template>
    <div class="w-full md:w-[30%] px-3">
        <div
            class="flex relative gap-3 items-center bg-white border-2 border-gray-300 p-3 pr-5"
        >
            <div class="w-[25%] flex-shrink-0">
                <img :src="data.icon_url" class="w-full" alt="" />
            </div>
            <div class="w-[70%] overflow-hidden">
                <div
                    class="text-2xl text-red-500 font-bold whitespace-nowrap overflow-hidden text-ellipsis"
                >
                    {{ currentCategory }}
                </div>
                <small>
                    <div
                        class="text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                    >
                        {{ new Date(data.created_at).toLocaleString() }}
                    </div>
                </small>
                <ul class="flex flex-col gap-1 text-xs">
                    <li
                        class="flex bg-gray-200 p-1 rounded-xl whitespace-nowrap overflow-hidden text-ellipsis"
                    >
                        <span
                            ><img
                                class="h-4 w-7 flex-shrink-0"
                                src="/tag.webp"
                                alt=""
                        /></span>
                        <span class="overflow-hidden text-ellipsis"
                            >ID: {{ data.id }}</span
                        >
                    </li>
                    <li
                        class="flex bg-gray-200 p-1 rounded-xl whitespace-nowrap overflow-hidden text-ellipsis"
                    >
                        <span
                            ><img
                                class="h-4 w-7 flex-shrink-0"
                                src="/tag.webp"
                                alt=""
                        /></span>
                        <span class="overflow-hidden text-ellipsis"
                            >Updated:
                            {{
                                new Date(data.updated_at).toLocaleString()
                            }}</span
                        >
                    </li>
                    <li
                        class="flex items-center gap-1 bg-gray-200 p-1 rounded-xl"
                    >
                        <span
                            ><img
                                class="h-4 w-7 flex-shrink-0"
                                src="/tag.webp"
                                alt=""
                        /></span>
                        <span class="line-clamp-2 overflow-hidden">{{
                            data.value
                        }}</span>
                    </li>
                </ul>
            </div>
            <div class="absolute bottom-3 right-1 text-orange-400">
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
    </div>
</template>
