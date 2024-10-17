<script setup>
import Card from "./components/Card.vue";
import { onMounted, ref } from "vue";
const categories = ref([]);
const currentData = ref([]);
const curentCategory = ref("animal");

async function getItemsForCategory(category) {
    curentCategory.value = category;
    const res = await fetch(
        `https://api.chucknorris.io/jokes/search?query=${category}`,
    );
    const json = await res.json();
    currentData.value = json.result;
}

onMounted(async () => {
    const res = await fetch("https://api.chucknorris.io/jokes/categories");
    categories.value = await res.json();
    const itemsRes = await fetch(
        `https://api.chucknorris.io/jokes/search?query=${curentCategory.value}`,
    );
    const json = await itemsRes.json();
    currentData.value = json.result;
});
</script>

<template>
    <div class="bg-slate-200 min-h-screen">
        <div class="container p-2 md:px-10">
            <div class="flex gap-3 flex-wrap mb-5 md:mb-5 justify-center">
                <template v-for="category in categories">
                    <div
                        @click="getItemsForCategory(category)"
                        class="bg-slate-400 p-1 px-2 rounded-full"
                    >
                        {{ category }}
                    </div>
                </template>
            </div>

            <div class="flex flex-wrap gap-5 justify-center">
                <template v-for="item in currentData">
                    <Card :currentCategory="currentCategory" :data="item" />
                </template>
            </div>
        </div>
    </div>
</template>
