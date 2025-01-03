<script setup>
import Card from "./components/Card.vue";
import { onMounted, ref } from "vue";
const categories = ref([]);
const currentData = ref([]);
const currentCategory = ref("animal");
const isExpanded = ref(false); // Add state for expanded/collapsed

async function getItemsForCategory(category) {
    currentCategory.value = category;
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
        `https://api.chucknorris.io/jokes/search?query=${currentCategory.value}`,
    );
    const json = await itemsRes.json();
    console.log(json);
    currentData.value = json.result;
});

function toggleExpanded() {
    isExpanded.value = !isExpanded.value;
}
</script>

<template>
    <div
        id="chucknorris-widget"
        :class="{ expanded: isExpanded }"
        @click="toggleExpanded"
    >
        <div v-if="isExpanded" class="widget-content">
            <div class="container px-5 md:px-10">
                <div
                    class="flex gap-3 flex-wrap mb-5 md:mb-5 justify-center md:justify-between"
                >
                    <template v-for="category in categories">
                        <div
                            @click="getItemsForCategory(category)"
                            class="bg-slate-400 p-1 px-2 rounded-full"
                        >
                            {{ category }}
                        </div>
                    </template>
                </div>

                <div
                    class="flex flex-col md:flex-row flex-wrap gap-5 justify-center md:justify-between"
                >
                    <template v-for="item in currentData">
                        <Card :currentCategory="currentCategory" :data="item" />
                    </template>
                </div>
            </div>
        </div>
        <div v-else class="widget-icon">
            <!-- You can use a chat icon or your logo here -->
            <img src="./assets/vue.svg" alt="Open Chat" />
        </div>
    </div>
</template>

<style scoped>
#chucknorris-widget {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000; /* Ensure it's on top */
    width: 60px; /* Adjust as needed */
    height: 60px; /* Adjust as needed */
    border-radius: 50%;
    background-color: #41b883;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: all 0.3s ease;
}

#chucknorris-widget.expanded {
    width: 100%; /* Or a specific width for the expanded state */
    height: 100%; /* Or a specific height for the expanded state */
    border-radius: 10px; /* Adjust as needed */
    bottom: 0;
    right: 0;
}

.widget-content {
    background-color: #f8f8f8;
    padding: 20px;
    border-radius: 10px; /* Adjust as needed */
    width: 100%;
    height: 100%;
    overflow-y: auto;
}

.widget-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

.widget-icon img {
    width: 40px; /* Adjust as needed */
    height: 40px; /* Adjust as needed */
}
</style>
