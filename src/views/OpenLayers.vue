<script setup lang="ts">
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import { ref, onMounted } from 'vue';

// 網頁元素綁定Map的ref
const mapContainer = ref<string | HTMLElement>("mapContainer");

onMounted(() => {
    // 印度經緯度[8.24~37.36, 68.7~97.25] -> center [22.8, 82.975]
    // 孟買 [19.07, 72.87] 新德里 [28.61, 77.2]
    const map = L.map(mapContainer.value, {
        center: [22.8, 82.975], // 初次開啟地圖的中心點
        zoom: 4, // 初次開啟的縮放比
    });

    // 地圖資源
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // 增加Marker以及其內容並預設autoClose = false防止只有最後一個Marker被開啟
    const mumbaiMarker = L.marker([19.07, 72.87]).addTo(map).bindPopup(`<b>孟買<br/>人數: ${123}人</b><br/><a href="/otherPage">跳轉其他畫面</a>`, { autoClose: false });
    const newDeihiMarker = L.marker([28.61, 77.2]).addTo(map).bindPopup(`<b>新德里<br/>人數: ${456}人</b><br/><a href="/otherPage">跳轉其他畫面</a>`, { autoClose: false });

    mumbaiMarker.openPopup();
    newDeihiMarker.openPopup();
});

</script>

<template>
    <div class="bodyPart">
        <div class="mapContainer" ref="mapContainer"></div>
    </div>
</template>

<style scoped>
.bodyPart {
    height: 85%;

    display: flex;
    align-items: center;
    justify-content: center;
}

.mapContainer {
    width: 800px;
    height: 400px;

    border: 2px solid black;
}
</style>