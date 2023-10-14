
<template>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>倫敦旅遊方案</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="bg-gray-100 font-sans">
    <div class="container mx-auto p-8">
        <h1 class="text-3xl font-semibold mb-6">倫敦旅遊方案</h1>
        <p class="text-gray-700 mb-6">探索古老與現代交融的城市，倫敦等待著您的到來！我們提供多種旅遊方案，滿足您的需求。</p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-xl font-semibold mb-4">文化之旅</h2>
                <p class="text-gray-700 mb-4">深入了解倫敦豐富的歷史和文化，參觀博物館、藝廊，探索古老建築和藝術品。</p>
                <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">了解更多</button>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-xl font-semibold mb-4">主題公園之旅</h2>
                <p class="text-gray-700 mb-4">帶著家人和朋友一同前往倫敦的主題公園，度過充滿歡笑和刺激的時光。</p>
                <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">了解更多</button>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-xl font-semibold mb-4">美食之旅</h2>
                <p class="text-gray-700 mb-4">品嚐來自世界各地的美食，探尋倫敦獨特的美食文化，享受美味的餐廳和小吃。</p>
                <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">了解更多</button>
            </div>
        </div>
    </div>
</body>

</template>