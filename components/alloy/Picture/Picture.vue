<template>
    <picture
        :id="id"
        class="o-picture"
        :class="classname"
        :aria-hidden="ariaHidden"
    >
        <img
            v-if="image.src"
            :src="image.src"
            :alt="image.altText ? image.altText : ''"
            :loading="loading"
            :data-width="width"
            :data-height="height"
        >
    </picture>
</template>

<script>
export default {
    name: 'AlloyPicture',
    components: {
    },
    props: {
        id: {
            type: String,
            default: null
        },
        classname: {
			type: String,
			default: null
        },
        ariaHidden: {
            type: Boolean,
            default: null
        },
        image: {
            type: Object,
            default: function () {
                return {
                    src: 'https://cdn.jcmserv3.net/sample-01-05@16_9.jpg',
                    altText: 'Default picture image alt'
                };
            }
        },
        loading: {
            type: String,
            default: 'lazy'
        },
        width: {
			type: String,
			default: '',
        },
        height: {
			type: String,
			default: '',
        }
    },
    data: () => {
        return {};
    }
};
</script>
