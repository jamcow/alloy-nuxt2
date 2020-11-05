<template>
    <div>
        <h1>alloy picture element</h1>
        <AlloyPicture
            :image="{ src: 'https://cdn.jcmserv3.net/sample-34-04@16_9.jpg' }"
        />
        <AlloyPicture
            :image="{
                src: 'https://cdn.jcmserv3.net/sample-48-03@1_1.jpg',
                altText: 'New alt text',
            }"
        />
    </div>
</template>

<script>
</script>
